const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const PORT = 3000;

// Replace with your Gemini API key and UR
const GEMINI_API_URL = "https://api.gemini-ai.com/v1/faq";
const GEMINI_API_KEY = "AIzaSyBXLWjARQ65j0autanrwAYMGm_pQvS1We0";

app.use(bodyParser.json());

// Query Gemini API
const queryGeminiAPI = async (question) => {
  try {
    const response = await axios.post(
      GEMINI_API_URL,
      { question },
      {
        headers: {
          Authorization: `Bearer ${GEMINI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.answer || "I'm sorry, I don't have an answer to that.";
  } catch (error) {
    console.error("Error querying Gemini API:", error);
    return "Error: Unable to connect to the Gemini API.";
  }
};

// Chatbot endpoint
app.post("/chatbot", async (req, res) => {
  const userMessage = req.body.message?.trim();

  if (!userMessage) {
    return res.status(400).json({ error: "No message provided" });
  }

  let response;

  if (userMessage.toLowerCase().includes("courses")) {
    response =
      "We offer a variety of courses. Please visit the Courses section for details!";
  } else if (userMessage.toLowerCase().includes("demo class")) {
    response =
      "You can book a demo class by clicking on 'Book Demo' on our website.";
  } else {
    response = await queryGeminiAPI(userMessage);
  }

  return res.json({ reply: response });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
