import { chai, app, expect } from "./helper";

describe("Root Route/ Get Details", () => {
  it("should display", (done) => {
    chai
      .request(app)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        const { status, message, data } = res.body;
        const { name, email, github, mobile } = data;
        expect(status).to.equal("success");
        expect(message).to.equal("My Rule-Validation API");
        expect(name).to.equal("Kayode Gabriel Abiodun");
        expect(github).to.equal("@uncleabbey");
        expect(email).to.equal("kayodegabriela@gmail.com");
        expect(mobile).to.equal("07069388069");
        done();
      });
  });
  it("should throw error if routes isn't available", (done) => {
    chai
      .request(app)
      .get("/abbey")
      .end((err, res) => {
        const { status, message, data } = res.body;
        expect(res).to.have.status(404);
        expect(status).to.equal("error");
        expect(message).to.equal("404 Page Not Found.");
        expect(data).to.equal(null);
        done();
      });
  });
});
