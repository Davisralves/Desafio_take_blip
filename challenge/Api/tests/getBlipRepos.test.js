const chai = require("chai"),
	chaiHttp = require("chai-http");
sinon = require("sinon");
chai.use(chaiHttp);
app = require("../index");
const { expect } = chai;
Service = require("../service/resquestRepos");
const { apiResponse, gitResponse } = require("./mocks/repoResponse");
describe("Test / get when api work as aspected", () => {
	before(async () => {
		sinon.stub(Service, "requestRepos").resolves(gitResponse);
	});

	after(() => Service.requestRepos.restore());

	it('route "/" work as aspected', async () => {
		const chaiHttpResponse = await chai.request(app).get("/");
		expect(chaiHttpResponse).to.have.status(200);
		expect(chaiHttpResponse.body).to.be.deep.equals(apiResponse);
	});
});

describe("Test / get if api return status 500", () => {
	before(async () => {
		sinon.stub(Service, "requestRepos").resolves({ status: 500 });
	});

	after(() => Service.requestRepos.restore());

	it('route "/" work as aspected', async () => {
		const chaiHttpResponse = await chai.request(app).get("/");
		expect(chaiHttpResponse).to.have.status(500);
	});
});
