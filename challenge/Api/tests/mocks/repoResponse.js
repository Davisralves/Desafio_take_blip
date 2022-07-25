const gitResponse = [
	{
		owner: { avatar_url: "avatar1" },
		full_name: "full_name1",
		description: "descriptio2",
		language: "C#",
	},
	{
		owner: { avatar_url: "avatar2" },
		full_name: "full_name2",
		description: "description2",
		language: "C#",
	},
];

const apiResponse = {
	0: {
		image: "avatar1",
		title: "full_name1",
		subtitle: "descriptio2",
	},
	1: {
		image: "avatar2",
		title: "full_name2",
		subtitle: "description2",
	},
};

module.exports = { gitResponse, apiResponse };
