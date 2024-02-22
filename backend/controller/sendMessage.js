// import OpenAI from "openai";
const OpenAI = require("openai");

const sendMessage = async (req, res) => {
  const openai = new OpenAI({
    // replace your-api-key with your API key from ChatGPT
    apiKey: "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",
    organization: "org-Nt8UJ5Ods1YabcmEZ34mmLQb"
  });

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);
    res.status(200).json({ message: completion.choices[0] });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = sendMessage;
