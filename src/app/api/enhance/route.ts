import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 20;

// Define the same TemplateField interface from frontend
interface TemplateField {
  id: string;
  label: string;
  placeholder: string;
  type: "input" | "textarea";
}

interface Template {
  id: string;
  title: string;
  description: string;
  icon: string;
  fields: TemplateField[];
}

interface RequestBody {
  idea: string;
  template: Template;
}

export async function POST(req: NextRequest) {
  try {
    const { idea, template }: RequestBody = await req.json();

    if (!idea || !template || !template.title) {
      return NextResponse.json({ error: "A valid idea and template object are required" }, { status: 400 });
    }

    // Type-safe field extraction
    const fieldLabels = template.fields.map((f: TemplateField) => f.label).join(', ');

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "AI Report Enhancer",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-lite",
        messages: [
          {
            role: "system",
            content: `You are an expert at enhancing simple ideas into detailed prompts. 
            
TEMPLATE: ${template.title}
DESCRIPTION: ${template.description}
REQUIRED FIELDS: ${fieldLabels}

INSTRUCTIONS:
1. Take the user's simple idea and make it more specific for a ${template.title}
2. Add [placeholder with examples] for the main template fields: ${fieldLabels}
3. Keep it professional and focused on Indian context
4. Return ONLY the enhanced prompt, no explanations

EXAMPLE:
Template: "Business Pitch Report" with fields: Business Idea, Target Market, Key Differentiator
User Idea: "food delivery app"
Enhanced: "Create a business pitch for a hyperlocal food delivery app focusing on [Tier 2 cities in India like Indore, Coimbatore]. Target audience: [office workers and students looking for affordable daily meals]. Key differentiators: [30-minute delivery guarantee, regional cuisine focus, zero delivery fees]."`
          },
          {
            role: "user",
            content: `Enhance this idea: "${idea}"`
          }
        ],
        max_tokens: 500,
        temperature: 0.6,
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Enhancer API Error:", errorData);
      throw new Error(errorData.error?.message || "Failed to get response from AI enhancer.");
    }

    const data = await response.json();
    const enhancedPrompt = data.choices[0]?.message?.content?.trim() || "";

    if (!enhancedPrompt) {
        throw new Error("The AI enhancer returned an empty response.");
    }

    return NextResponse.json({ enhancedPrompt });

  } catch (error: unknown) {
    console.error("Enhance API Error:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}