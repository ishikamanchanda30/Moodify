const express = require("express");
const env = require("dotenv").config();

const port = process.env.PORT;
const app = express();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hi");
});
