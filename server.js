import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Use built-in JSON parser
app.use(express.json());
app.use(express.static("."));

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    console.log("Sending message to Mistral API:", message);

    // Using the official Mistral Chat API endpoint
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.MISTRAL_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mistral-large-latest", // You can also try "mistral-7b-instruct"
        messages: [
          { role: "user", content: message } // Chat format required by Mistral
        ],
      }),
    });

    console.log("Response status:", response.status);

    const data = await response.json();
    console.log("Mistral API response:", data);

    // Extract the reply from the API response
    const reply = data?.choices?.[0]?.message?.content || "No response from Mistral API";

    res.json({ reply });
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
