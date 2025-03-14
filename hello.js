const express = require("express");

const app = express();

const PORT = 8000;

const index = "<a href='/sobre'>Sobre</a><a href='/info'>Info<a/a>";

app.get("/", (req, res) => {
  res.send(index);
});

app.get("/sobre", (req, res) => {
  res.send("Vc esta na pagina sobre");
});

app.get("/info", (req, res) => {
  res.send('Vc está na pagina "Info"');
});

app.listen(PORT, () => {
  console.log("servidor sendo executado na porta 300!");
});
