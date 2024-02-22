// import OpenAI from "openai";
const OpenAI = require("openai");

const sendMessage = async (req, res) => {

  // ------ uncomment below 4 lines to see if you're getting credentials or not---------------

  // console.log(process.env.API_KEY);
  // console.log(process.env.ORGANIZATION);
  // console.log(process.env.MODEL);
  // console.log(process.env.OPENAPI_ENDPOINT);


  const openai = new OpenAI({
    // replace your-api-key with your API key from ChatGPT
    apiKey: process.env.API_KEY,
    organization: process.env.ORGANIZATION,
  });

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: process.env.MODEL,
    });

    console.log(completion.choices[0]);
    res.status(200).json({ message: completion.choices[0] });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

module.exports = sendMessage;
