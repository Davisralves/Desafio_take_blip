const axios = require("axios");

module.exports = {
	requestRepos: () => {
		axios
			.get("https://api.github.com/users/takenet/repos?direction=desc")
			.then((res) => {
				console.log(`statusCode: ${res.status}`);
				console.log(res);
			})
			.catch((error) => {
				console.error(error);
			});
	},
};
