const axios = require("axios");

module.exports = {
	requestRepos: async () => {
		const repos = await axios.get(
			"https://api.github.com/users/takenet/repos?direction=desc"
		);
		return repos.data;
	},
};
