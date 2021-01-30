/* eslint-disable camelcase */
import { chai, app, expect } from "./helper";

const url = "/validate-rule";

describe("UTILS", () => {
  it("should return success validation for single nesting for equal", (done) => {
    const body = {
      rule: {
        field: "age",
        condition: "eq",
        condition_value: 34,
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
        const {
          status,
          message,
          data: {
            validation: {
              error,
              field,
              field_value,
              condition,
              condition_value,
            },
          },
        } = res.body;
        expect(res).to.have.status(200);
        expect(status).to.equal("success");
        expect(message).to.equal("field age successfully validated.");
        expect(error).to.equal(false);
        expect(field).to.equal(body.rule.field);
        expect(field_value).to.equal(34);
        expect(condition).to.equal("eq");
        expect(condition_value).to.equal(34);
        done();
      });
  });
  it("should return success validation for single nesting for not equal", (done) => {
    const body = {
      rule: {
        field: "age",
        condition: "neq",
        condition_value: 35,
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
        const {
          status,
          message,
          data: {
            validation: {
              error,
              field,
              field_value,
              condition,
              condition_value,
            },
          },
        } = res.body;
        expect(res).to.have.status(200);
        expect(status).to.equal("success");
        expect(message).to.equal("field age successfully validated.");
        expect(error).to.equal(false);
        expect(field).to.equal(body.rule.field);
        expect(field_value).to.equal(34);
        expect(condition).to.equal("neq");
        expect(condition_value).to.equal(35);
        done();
      });
  });
  it("should return success validation for single nesting for greater than", (done) => {
    const body = {
      rule: {
        field: "age",
        condition: "gt",
        condition_value: 34,
      },
      data: {
        name: "James Holden",
        crew: "Rocinante",
        age: 35,
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
        const {
          status,
          message,
          data: {
            validation: {
              error,
              field,
              field_value,
              condition,
              condition_value,
            },
          },
        } = res.body;
        expect(res).to.have.status(200);
        expect(status).to.equal("success");
        expect(message).to.equal("field age successfully validated.");
        expect(error).to.equal(false);
        expect(field).to.equal(body.rule.field);
        expect(field_value).to.equal(35);
        expect(condition).to.equal("gt");
        expect(condition_value).to.equal(34);
        done();
      });
  });
  it("should return success validation for single nesting for contain", (done) => {
    const body = {
      rule: {
        field: "ship.names",
        condition: "contains",
        condition_value: "The Roci",
      },
      data: {
        ship: {
          names: ["The Nauvoo", "The Razorback", "The Roci", "Tycho"],
        },
        name: "James Holden",
        crew: "Rocinante",
        age: 35,
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
        const {
          status,
          message,
          data: {
            validation: {
              error,
              field,
              field_value,
              condition,
              condition_value,
            },
          },
        } = res.body;
        expect(res).to.have.status(200);
        expect(status).to.equal("success");
        expect(message).to.equal(
          "field ship.names successfully validated."
        );
        expect(error).to.equal(false);
        expect(field).to.equal(body.rule.field);
        expect(field_value).to.be.an("Array");
        expect(condition).to.equal("contains");
        expect(condition_value).to.equal("The Roci");
        done();
      });
  });
});
