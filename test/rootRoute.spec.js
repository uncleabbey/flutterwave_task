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
        expect(message).to.equal(
          "UncleAbbey Simple Rule-Validation API."
        );
        expect(name).to.equal("Kayode Gabriel Abiodun");
        expect(github).to.equal("@uncleabbey");
        expect(email).to.equal("kayodegabriela@gmail.com");
        expect(mobile).to.equal("07069388069");
        done();
      });
  });
});
