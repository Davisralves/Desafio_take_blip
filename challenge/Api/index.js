require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Olá mundo"));

app.listen(process.env.PORT, () => {
	console.log(`Escutando na porta ${process.env.PORT}`);
});
