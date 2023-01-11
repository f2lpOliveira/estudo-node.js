const express = require("express");
const app = express();

// Rotas
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/sobre", function (req, res) {
  res.send("<h1>Minha Página Sobre!</h1>");
});

app.listen(3001, function () {
  console.log("Servidor rodando na url http://localhost:3001");
});
