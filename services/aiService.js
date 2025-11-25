const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const aiService = {
    async generateTestQuestion(topic) {
        return this._callGemini(`
            Generate 1 multiple-choice question about: "${topic}".
            Output valid JSON only. Structure:
            { "question": "...", "answer": "...", "category": "Grammar" }
        `);
    },

    // --- NEW: Generate Module ---
    async generateModule(topic, level) {
        return this._callGemini(`
            Create a learning module about "${topic}" for ${level} level students.
            Output valid JSON only. Structure:
            {
                "code": "Short Code (e.g. ENG-101)",
                "title": "Engaging Title",
                "description": "Brief description (max 2 sentences)",
                "level": "${level}",
                "lessons": (integer between 4-10)
            }
        `);
    },

    // Helper function to handle API calls and JSON cleaning
    async _callGemini(promptText) {
        try {
            const apiKey = process.env.GEMINI_API_KEY;
            if (!apiKey) throw new Error("Missing API Key");

            console.log(`[AI Service] contacting Gemini...`);
            const genAI = new GoogleGenerativeAI(apiKey);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

            const result = await model.generateContent(promptText);
            const text = result.response.text().replace(/```json|```/g, '').trim();
            
            const firstBrace = text.indexOf('{');
            const lastBrace = text.lastIndexOf('}');
            const cleanJson = (firstBrace !== -1) ? text.substring(firstBrace, lastBrace + 1) : text;
            
            return JSON.parse(cleanJson);

        } catch (error) {
            console.error("AI Error:", error.message.split('[')[0]);
            // Return null so controller knows it failed
            return null;
        }
    }
};

module.exports = aiService;