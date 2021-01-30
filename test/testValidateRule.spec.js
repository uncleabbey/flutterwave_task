/* eslint-disable camelcase */
import { chai, app, expect } from "./helper";

const url = "/validate-rule";

describe("Test Rule validation middleware", () => {
  it("should return error if rule passed isn't an object /string /array", (done) => {
    const body = {
      rule: 5,
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
        expect(message).to.equal("rule should be an object.");
        expect(data).to.equal(null);
        done();
      });
  });
  it("should return error if rule isn't passed", (done) => {
    const body = {
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
        expect(message).to.equal("rule is required.");
        expect(data).to.equal(null);
        done();
      });
  });
  it("should return error if rule isn't passed", (done) => {
    const body = {
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
        expect(message).to.equal("rule is required.");
        expect(data).to.equal(null);
        done();
      });
  });
  it("should return error if data isn't passed", (done) => {
    const body = {
      rule: {
        field: "missions.count",
        condition: "gte",
        condition_value: 30,
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
        expect(message).to.equal("data is required.");
        expect(data).to.equal(null);
        done();
      });
  });
  it("should return error if data passed isn't an object /string /array", (done) => {
    const body = {
      rule: {
        field: "missions.count",
        condition: "gte",
        condition_value: 30,
      },
      data: 50,
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
        expect(message).to.equal(
          "data should be one of ['string', 'Array', 'Object']."
        );
        expect(data).to.equal(null);
        done();
      });
  });
});
