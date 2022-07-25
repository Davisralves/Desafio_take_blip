const chai = require("chai");
const { expect } = chai;
Service = require("../service/resquestRepos");
Controller = require("../controller/getBlipRepos");
const { gitResponse } = require("./mocks/repoResponse");

describe("Test controller functions", () => {
	const expectedResult = {
		0: {
			image: "avatar1",
			title: "full_name1",
			subtitle: "description1",
		},
		1: {
			image: "avatar2",
			title: "full_name2",
			subtitle: "description2",
		},
	};
	it("FilterFirstFiveCSharpRepos work as aspected", () => {
		expect(Controller.FilterFirstFiveCSharpRepos(gitResponse)).to.deep.equals(
			expectedResult
		);
	});
});
