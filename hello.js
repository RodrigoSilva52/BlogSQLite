const express = require("express");

const app = express();

const PORT = 8000;

const index = "<a href='/sobre'>Sobre</a><a href='/info'>Info<a/a>";
const sobre = 'Vc está na página "SObre"<br><a href="/">VOltar</a>';
const info = 'vc está na página "INfo"<br><a href="/">Voltar</a>';

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
