const express = require("express");

const app = express();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("ola sesi!");
});

app.listen(PORT, () => {
  console.log("servidor sendo executado na porta 300!");
});
