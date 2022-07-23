const Service = require("../service/resquestRepos");

module.exports = {
	getBlipRepos: async (request, response) => {
		const repos = await Service.requestRepos();
		console.log(repos);
	},
};
