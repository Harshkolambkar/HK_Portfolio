import type { VercelRequest, VercelResponse } from "@vercel/node";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_PROMPT } from "../src/data/chatKnowledge";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("GEMINI_API_KEY is not set");
    return res.status(500).json({ error: "Server misconfiguration: missing API key" });
  }

  const { message, history = [] } = req.body ?? {};

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    const chat = model.startChat({
      history: history.map((h: { role: string; parts: string }) => ({
        role: h.role,
        parts: [{ text: h.parts }],
      })),
    });

    const result = await chat.sendMessage(message);
    return res.json({ response: result.response.text() });
  } catch (err) {
    console.error("Gemini API error:", err);
    return res.status(500).json({ error: "Failed to get response from AI" });
  }
}
