require("dotenv").config();
const express = require("express");
const app = express();
const Controller = require("./controller/getBlipRepos");

app.get("/", Controller.getBlipRepos);

app.listen(process.env.PORT, () => {
	console.log(`Escutando na porta ${process.env.PORT}`);
});