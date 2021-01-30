/* eslint-disable camelcase */
import { chai, app, expect } from "./helper";

const url = "/validate-rule";

describe("Given error test cases", () => {
  it("Should give error validation response", (done) => {
    const body = {
      rule: {
        field: "0",
        condition: "eq",
        condition_value: "a",
      },
      data: "damien-marley",
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
        expect(res).to.have.status(400);
        expect(status).to.equal("error");
        expect(message).to.equal("field 0 failed validation.");
        expect(error).to.equal(true);
        expect(field).to.equal(body.rule.field);
        expect(field_value).to.equal("d");
        expect(condition).to.equal("eq");
        expect(condition_value).to.equal("a");
        done();
      });
  });

  it("should return error for if is not found in data", (done) => {
    const body = {
      rule: {
        field: "0",
        condition: "eq",
        condition_value: "a",
      },
      data: "damien-marley",
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
        expect(res).to.have.status(400);
        expect(status).to.equal("error");
        expect(message).to.equal("field 0 failed validation.");
        expect(error).to.equal(true);
        expect(field).to.equal(body.rule.field);
        expect(field_value).to.equal("d");
        expect(condition).to.equal("eq");
        expect(condition_value).to.equal("a");
        done();
      });
  });
});
