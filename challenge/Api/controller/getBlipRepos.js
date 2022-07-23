const Service = require("../service/resquestRepos");

const FilterFirstFiveCSharpRepos = (repos) => {
	const cSharpRepos = repos.filter((repo) => repo.language === "C#");
	const fiveCSharpRepos = cSharpRepos.slice(0, 5);
	return fiveCSharpRepos.map((repo) => ({
		image: repo.owner.avatar_url,
		title: repo.full_name,
		subtitle: repo.description,
	}));
};

module.exports = {
	getBlipRepos: async (request, response) => {
		try {
			const repos = await Service.requestRepos();
			const firstFiveCSharpRepos = FilterFirstFiveCSharpRepos(repos);
			response.status(200).json(firstFiveCSharpRepos);
		} catch (error) {
			console.log(error);
		}
	},
};
