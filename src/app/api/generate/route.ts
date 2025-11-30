import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 120;


const MODELS = [

  "google/gemini-2.5-flash-lite",           
  "deepseek/deepseek-chat",                    
  "google/gemini-2.5-flash"
]


async function generateWithModel(model: string, systemPrompt: string, userPrompt: string, maxTokens: number) {
  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      "X-Title": "AI Report Generator",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      max_tokens: maxTokens,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || "API call failed");
  }

  const data = await response.json();
  return data.choices[0]?.message?.content?.trim() || "";
}


export async function POST(req: NextRequest) {
  try {
    const { idea, template, pages } = await req.json();

    if (!idea || typeof idea !== "string") {
      return NextResponse.json({ error: "Valid idea required" }, { status: 400 });
    }

    if (!template || typeof template !== "string") {
      return NextResponse.json({ error: "Valid template required" }, { status: 400 });
    }

    const trimmedIdea = idea.trim();
    if (trimmedIdea.length < 10) {
      return NextResponse.json(
        { error: "Request must be at least 10 characters" },
        { status: 400 }
      );
    }

    const targetPages = Math.max(2, Math.min(50, parseInt(pages) || 5));

    const wordsPerPage = 500;
    const requiredWords = targetPages * wordsPerPage;
    const minWords = Math.floor(requiredWords * 0.9);

    const estimatedTokens = Math.ceil(requiredWords / 0.75);
    const maxTokensNeeded = Math.min(16000, estimatedTokens + 500); 

    const systemPrompt = `You are MD Tahseen Alam, a world-renowned strategist and Master AI Reports Architect.

ABSOLUTE NON-NEGOTIABLE REQUIREMENTS:

1. START DIRECTLY with the report content. NO introductory phrases NO markdown, NO symbols like *, #, -, etc.

2. LENGTH IS MANDATORY - THIS IS THE MOST IMPORTANT RULE:
   - You MUST generate EXACTLY ${targetPages} pages
   - This means ${requiredWords} words MINIMUM (ideally ${requiredWords}-${requiredWords + 500})
   - Each section must be detailed and comprehensive
   - DO NOT stop writing until you reach ${requiredWords} words
   - If you generate less than ${minWords} words, you have FAILED

3. HOW TO REACH ${targetPages} PAGES:
   ${targetPages <= 5 ? `
   - Write 3-4 paragraphs per section
   - Each paragraph should be 100-150 words
   - Include specific examples and data points` : ''}
   ${targetPages > 5 && targetPages <= 15 ? `
   - Write 5-7 paragraphs per section
   - Each paragraph should be 150-200 words
   - Include detailed examples, case studies, and data
   - Add subsections under main sections` : ''}
   ${targetPages > 15 ? `
   - Write 8-12 paragraphs per major section
   - Each paragraph should be 200-250 words
   - Include multiple case studies, detailed data analysis
   - Create subsections with their own detailed analysis
   - Add tables of data, step-by-step breakdowns
   - Provide exhaustive examples and scenarios` : ''}

4. FORMATTING:
   - Plain text only - NO markdown symbols
   - Only Indian Rupee symbol (₹) allowed
   - ALL CAPS section headers
   - Two newlines between sections
   - Indian market context, late 2025

5. EXPERT PERSONAS - Choose based on template:

   Academic (academic_synopsis, research_paper, project_report):
   - Dr. A. Kumar, Senior Academic Researcher
   - Sections: Abstract, Introduction, Literature Review, Methodology, Findings, Discussion, Conclusion
   - Write academically with extensive citations of hypothetical sources
   
   Business (market_analysis, business_report):
   - Priya Sharma, Corporate Strategy Consultant
   - Sections: Executive Summary, Industry Overview, Market Analysis, Competition, SWOT, Financial Projections, Strategic Recommendations
   - Include detailed market data, charts descriptions, financial breakdowns
   
   Freelance (client_proposal, freelance_report):
   - Rohan Verma, Freelance Consultant
   - Sections: Introduction, Problem Analysis, Proposed Solution, Methodology, Deliverables, Timeline, Pricing Structure, Terms
   - Very detailed deliverables and milestone breakdowns
   
   Education (lesson_plan, evaluation_report):
   - Mrs. S. Iyer, Experienced Educator
   - Sections: Objectives, Materials, Detailed Activities, Assessment Methods, Differentiation, Extensions
   - Step-by-step activity instructions with timing

REMEMBER: Your reputation depends on delivering EXACTLY ${targetPages} pages (${requiredWords} words). Do NOT cut corners. Write comprehensively until you reach the required length.`;

    const userPrompt = `Template: "${template}"
Target: ${targetPages} pages (${requiredWords} words minimum)
Topic: "${trimmedIdea}"

IMPORTANT: Use PLAIN TEXT only - no markdown symbols, no asterisks, no bullet points, no special formatting.

CRITICAL INSTRUCTION: Write a comprehensive ${targetPages}-page report. Do NOT stop until you have written at least ${requiredWords} words. Every section must be detailed and thorough. Begin now:`;

    let lastError = null;
    let usedModel = "";

    for (const model of MODELS) {
      try {
        console.log(`Trying model: ${model}`);
        
        let pitch = "";
        if (targetPages > 25) {
          console.log(`Very long report (${targetPages} pages) - using 2-part generation`);
          
          const part1Pages = Math.ceil(targetPages / 2);
          const part1Tokens = Math.ceil((part1Pages * wordsPerPage) / 0.75) + 500;
          
          const part1 = await generateWithModel(
            model, 
            systemPrompt.replace(/\d+ pages/g, `${part1Pages} pages (FIRST HALF)`).replace(/\d+ words/g, `${part1Pages * wordsPerPage} words`),
            userPrompt.replace(/\d+ pages/g, `${part1Pages} pages - PART 1`),
            Math.min(16000, part1Tokens)
          );
          
          const part2Pages = targetPages - part1Pages;
          const part2Tokens = Math.ceil((part2Pages * wordsPerPage) / 0.75) + 500;
          
          const part2 = await generateWithModel(
            model,
            systemPrompt.replace(/\d+ pages/g, `${part2Pages} pages (SECOND HALF)`).replace(/\d+ words/g, `${part2Pages * wordsPerPage} words`),
            userPrompt.replace(/\d+ pages/g, `${part2Pages} pages - PART 2 (Continue)`),
            Math.min(16000, part2Tokens)
          );
          
          pitch = part1 + "\n\n" + part2;
        } else {
          pitch = await generateWithModel(model, systemPrompt, userPrompt, maxTokensNeeded);
        }
        
        if (!pitch) {
          throw new Error("Empty response");
        }

        usedModel = model;
        
        const wordCount = pitch.split(/\s+/).length;
        
       
        return NextResponse.json({ 
          pitch,
          model: usedModel,
          pages: targetPages,
          wordCount
     
        });

      } catch (error) {
        console.error(`Model ${model} failed:`, error);
        lastError = error;
        continue; 
      }
    }

   
    throw new Error(`All models failed. Last error: ${lastError}`);

  } catch (error: unknown) {
    console.error("Generation Error:", error);
    
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}