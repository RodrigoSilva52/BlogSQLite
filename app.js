const express = require("express");
const sqlite3 = require("sqlite3");

const app = express();

const PORT = 8000;

const db = new sqlite3.Database("user.db");
db.serialize(() => {
  db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT)"
  );
});

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
