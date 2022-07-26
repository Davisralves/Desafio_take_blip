const axios = require("axios");

module.exports = {
	requestRepos: async () => {
		const repos = await axios.get(
			"https://api.github.com/users/takenet/repos?sort=created&direction=asc"
		);
		return repos.data;
	},
};
