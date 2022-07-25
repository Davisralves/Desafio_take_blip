const axios = require("axios");
const chai = require("chai"),
	sinon = require("sinon");
const { expect } = chai;
Service = require("../service/resquestRepos");

describe("Test service functions", () => {
	it("requestRepos return data as aspected", async () => {
		sinon.stub(axios, "get").resolves({ data: "data" });
		expect(await Service.requestRepos()).to.equals("data");
	});
});
