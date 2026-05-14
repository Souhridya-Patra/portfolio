
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || "";

let ai: GoogleGenAI | null = null;

try {
  if (apiKey) {
    ai = new GoogleGenAI({ apiKey });
  }
} catch (error) {
  console.error('Failed to initialize GoogleGenAI:', error);
}

export const getAiResponse = async (userPrompt: string, context?: string) => {
  if (!ai) {
    return "AI Assistant is not configured. Please set up your GEMINI_API_KEY environment variable.";
  }

  const model = "gemini-3-flash-preview";
  
  const baseInstruction = `
    You are the Senior Career Assistant for ${PORTFOLIO_DATA.name}, a CSE student.
    CONTEXTUAL DATA:
    - Name: ${PORTFOLIO_DATA.name}
    - Role: ${PORTFOLIO_DATA.role}
    - Projects: ${JSON.stringify(PORTFOLIO_DATA.projects)}
    - Growth: ${JSON.stringify(PORTFOLIO_DATA.reflections)}
    - Certifications: ${JSON.stringify(PORTFOLIO_DATA.certifications)}
    - Certificates & Awards: ${JSON.stringify(PORTFOLIO_DATA.certificates)}
  `;

  const taskInstruction = context === 'project' 
    ? "Provide a deep technical analysis of the project mentioned. Focus on architecture and problem-solving."
    : "Be professional and recruiter-focused. Provide concise, data-driven answers. Mention specific certifications like AWS or Google Cloud when discussing technical validity.";

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userPrompt,
      config: {
        systemInstruction: `${baseInstruction}\n${taskInstruction}`,
        temperature: 0.6,
      },
    });

    return response.text || "Connection error. Please try again.";
  } catch (error) {
    console.error('AI API Error:', error);
    return "The AI is currently processing a large deployment. Try again in a second!";
  }
};
