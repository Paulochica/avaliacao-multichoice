import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getAnswerExplanation = async (
  questionText: string,
  correctOptionText: string,
  userOptionText: string | null
): Promise<string> => {
  if (!apiKey) {
    return "API Key not configured. Unable to fetch AI explanation.";
  }

  const prompt = `
    You are a computer science tutor.
    The user is taking a quiz about Web 2.0, Networking, HTML/CSS, and JavaScript.

    Question: "${questionText}"
    The correct answer is: "${correctOptionText}"
    ${userOptionText && userOptionText !== correctOptionText 
      ? `The user incorrectly selected: "${userOptionText}"` 
      : 'The user answered correctly.'}

    Provide a brief, concise explanation (max 2 sentences) in Portuguese explaining why the correct answer is right${userOptionText && userOptionText !== correctOptionText ? ' and why the user choice is wrong' : ''}.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "Sem explicação disponível.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Erro ao carregar explicação da IA. Verifique sua conexão ou chave de API.";
  }
};