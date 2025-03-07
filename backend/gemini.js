const axios = require("axios");
require("dotenv").config();

const sendRequestToGemini = async (prompt) => {
  try {
    const requestData = {
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
    };

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const response = await axios.post(apiUrl, requestData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const textContent = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return textContent || "No response from Gemini";
  } catch (error) {
    console.error("Error communicating with Gemini API:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = sendRequestToGemini;
