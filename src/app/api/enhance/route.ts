import { NextRequest, NextResponse } from "next/server";

export const maxDuration = 20;

export async function POST(req: NextRequest) {
  try {
    const { idea, template } = await req.json();

    if (!idea || !template || !template.title) {
      return NextResponse.json({ error: "A valid idea and template object are required" }, { status: 400 });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
        "X-Title": "AI Report Enhancer",
      },
      body: JSON.stringify({
        model: "openrouter/sonoma-dusk-alpha",
        messages: [
          {
            role: "system",
            content: `You are an expert Prompt Engineer and Strategist named "Co-Pilot". A user has provided a simple idea for a specific report template. Your task is to transform their idea into a rich, detailed, high-quality prompt that includes clear, interactive placeholders for the user to fill in.

            **CONTEXTUAL AWARENESS:**
            You are aware the user is operating in India as of late 2025. Your examples and suggestions in the placeholders should be relevant to the Indian market (e.g., referencing Indian companies, cities, or market trends).

            **PRIMARY DIRECTIVE: IDENTIFY AMBIGUITIES & CREATE INTERACTIVE PLACEHOLDERS**
            Your main goal is to identify the missing, high-impact information in the user's prompt. You will then rewrite the prompt, weaving in their original idea and adding bracketed placeholders \`[like this]\` where they need to add more detail. The placeholders MUST contain helpful examples to guide the user.

            **EXAMPLE OF YOUR TASK:**
            -   **TEMPLATE:** "Market Analysis Report"
            -   **USER'S IDEA:** "a report on D2C fashion"
            -   **YOUR REQUIRED OUTPUT:**
                "Generate a detailed market analysis report on the Indian Direct-to-Consumer (D2C) fashion market, with a specific focus on [e.g., sustainable clothing, ethnic wear, streetwear?]. The report should analyze the primary target audience of [e.g., Gen Z in Tier-1 cities, working professionals aged 30-45?], and key competitors such as [e.g., Myntra, Ajio, smaller Instagram brands?]. The report should assess the key growth drivers and challenges in the post-2024 Indian market."

            **OUTPUT RULES:**
            1.  **RETURN ONLY THE PROMPT:** Your entire response must be ONLY the new prompt text. No conversational intros or outros.
            2.  **USE HELPFUL PLACEHOLDERS:** The placeholders \`[in brackets]\` are the most important part of your output. They must be clear and contain guiding examples.
            3.  **PROFESSIONAL TONE:** The language of the prompt you create should be professional, clear, and direct.
            `
          },
          {
            role: "user",
            content: `Enhance this idea for a "${template.title}" report: "${idea}"`
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
