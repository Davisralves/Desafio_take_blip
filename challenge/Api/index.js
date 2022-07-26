require("dotenv").config();
const express = require("express");
const app = express();
const Controller = require("./controller/getBlipRepos");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", Controller.getBlipRepos);

app.listen(PORT, () => {
	console.log(`Escutando na porta ${PORT}`);
});

module.exports = app;
