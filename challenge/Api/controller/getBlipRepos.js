const Service = require("../service/resquestRepos");

const FilterFirstFiveCSharpRepos = (repos) => {
	const cSharpRepos = repos.filter((repo) => repo.language === "C#");
	const fiveCSharpRepos = cSharpRepos.slice(0, 5);
	return fiveCSharpRepos.reduce(
		(repoObject, actualRepo, index) => ({
			...repoObject,
			[index]: {
				image: actualRepo.owner.avatar_url,
				title: actualRepo.full_name,
				subtitle: actualRepo.description,
			},
		}),
		{}
	);
};

module.exports = {
	getBlipRepos: async (request, response) => {
		try {
			const repos = await Service.requestRepos();
			const firstFiveCSharpRepos = FilterFirstFiveCSharpRepos(repos);
			response.status(200).json(firstFiveCSharpRepos);
		} catch (error) {
			response.status(500).json({ error });
		}
	},
	FilterFirstFiveCSharpRepos,
};
