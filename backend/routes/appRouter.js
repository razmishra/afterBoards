const { default: axios } = require("axios");
const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const sendMessage = require("../controller/sendMessage");
const dummyResponseData = require("../dummyResponse");
const appRouter = express.Router();
appRouter.get("/", (req, res) => {
  return res.send("Welcome to after boards");
});

appRouter.get("/submit", sendMessage);

// update below route whenever integrating openai

// appRouter.post("/submit", async (req, res) => {
//   const data = {
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Say this is a test!" }],
//     temperature: 0.7,
//   };

//   try {
//     const response = await fetch(process.env.OPENAPI_ENDPOINT, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//         "Authorization": `Bearer {process.env.API_KEY}`,
//       },
//       body: data,
//     });

//     if (response.ok) {
//       const result = await response.json();
//       console.log("result",result);
//       return res.send(result);
//     } else {
//       console.log("Error:", response);
//       return res.status(response.status).send("Error");
//     }
//   } catch (error) {
//     console.log("Error:", error.message);
//     return res.status(500).send("Internal Server Error");
//   }
// });

appRouter.post("/submit", (req, res) => {
  try {
    const data = req.body.formData;
    const responseObject = []
    Object.keys(data).map((word) => {
      dummyResponseData.map((repsonse) => {
        if (repsonse.word == word.toLowerCase()) {
          responseObject.push(repsonse);
          return;
        }
      });
    });

    return res.status(res.statusCode).json(responseObject);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = appRouter;
