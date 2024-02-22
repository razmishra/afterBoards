const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 8080;
const appRouter = require("./routes/appRouter");

app.use(cors());
app.use(express.json());
app.use("/", appRouter);

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
