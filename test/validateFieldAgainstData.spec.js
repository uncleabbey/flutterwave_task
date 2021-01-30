/* eslint-disable camelcase */
import { chai, app, expect } from "./helper";

const url = "/validate-rule";

describe("Test Rule.field validation middleware", () => {
  it("should return error if field isn't passed", (done) => {
    const body = {
      rule: {
        condition: "gte",
        condition_value: 30,
      },
      data: {
        name: "James Holden",
        crew: "Rocinante",
        age: 34,
        position: "Captain",
        missions: 45,
      },
    };

    chai
      .request(app)
      .post(url)
      .set("Accept", "application/json")
      .send(body)
      .end((err, res) => {
        const { status, message, data } = res.body;
        expect(res).to.have.status(400);
        expect(status).to.equal("error");
        expect(message).to.equal("field is required.");
        expect(data).to.equal(null);
        done();
      });
  });
  it("should return error if field passed is not a string", (done) => {
    const body = {
      rule: {
        condition: "gte",
        condition_value: 30,
        field: 2,
      },
      data: {
        name: "James Holden",
        crew: "Rocinante",
        age: 34,
        position: "Captain",
        missions: 45,
      },
    };

    chai
      .request(app)
      .post(url)
      .set("Accept", "application/json")
      .send(body)
      .end((err, res) => {
        const { status, message, data } = res.body;
        expect(res).to.have.status(400);
        expect(status).to.equal("error");
        expect(message).to.equal("field can only be a string.");
        expect(data).to.equal(null);
        done();
      });
  });
  it("should return error if field passed is not in array", (done) => {
    const body = {
      rule: {
        condition: "gte",
        condition_value: 30,
        field: "roci",
      },
      data: ["The Nauvoo", "The Razorback", "The Roci", "Tycho"],
    };

    chai
      .request(app)
      .post(url)
      .set("Accept", "application/json")
      .send(body)
      .end((err, res) => {
        const { status, message, data } = res.body;
        expect(res).to.have.status(400);
        expect(status).to.equal("error");
        expect(message).to.equal("field roci is missing from data.");
        expect(data).to.equal(null);
        done();
      });
  });
});
