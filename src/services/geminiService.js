import { GoogleGenerativeAI } from '@google/generative-ai';

let genAI = null;
let model = null;

export const initializeGemini = () => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    
    if (!apiKey || apiKey === 'your_api_key_here') {
      throw new Error('Please configure your Gemini API key in .env file');
    }

    genAI = new GoogleGenerativeAI(apiKey);
    model = genAI.getGenerativeModel({ 
      model: 'gemini-2.0-flash-exp',
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
      ],
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to initialize Gemini:', error);
    return { success: false, error: error.message };
  }
};

const SYSTEM_PROMPT = "You are a compassionate and knowledgeable Women Safety AI Assistant.";

export const sendMessage = async (userMessage, conversationHistory = []) => {
  try {
    if (!model) {
      const initResult = initializeGemini();
      if (!initResult.success) {
        return { success: false, error: initResult.error };
      }
    }

    if (!userMessage || typeof userMessage !== 'string' || userMessage.trim().length === 0) {
      return { success: false, error: 'Please enter a valid message' };
    }

    const recentHistory = conversationHistory.slice(-6);
    const contextMessages = recentHistory
      .map(msg => msg.role + ': ' + msg.text)
      .join('\\n\\n');

    const fullPrompt = SYSTEM_PROMPT + '\\n\\n' + contextMessages + '\\n\\nUser: ' + userMessage + '\\n\\nAssistant: ';

    const result = await model.generateContent(fullPrompt);
    const response = result.response;
    const text = response.text();

    if (!text || text.trim().length === 0) {
      return { success: false, error: 'Received empty response from AI' };
    }

    return { success: true, response: text };
  } catch (error) {
    console.error('Error sending message:', error);
    
    if (error.message?.includes('API key')) {
      return { success: false, error: 'Invalid API key. Please check your configuration.' };
    }
    
    if (error.message?.includes('quota')) {
      return { success: false, error: 'API quota exceeded. Please try again later.' };
    }
    
    return { 
      success: false, 
      error: 'Failed to get response from AI. Please try again.' 
    };
  }
};
