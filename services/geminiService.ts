
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getAiResponse = async (userPrompt: string, context?: string) => {
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
    return "The AI is currently processing a large deployment. Try again in a second!";
  }
};
