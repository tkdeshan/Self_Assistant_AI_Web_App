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
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`;
    const response = await axios.post(apiUrl, requestData);
    const textContent = response.data?.candidates[0].content.parts[0].text;
    return textContent;
  } catch (error) {
    throw error;
  }
};

module.exports = sendRequestToGemini;
