/* eslint-disable camelcase */
import { chai, app, expect } from "./helper";

const url = "/validate-rule";

describe("Given Test Cases for Success response", () => {
  it("should return success validation for single nesting", (done) => {
    const body = {
      rule: {
        field: "missions",
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
          "field missions successfully validated."
        );
        expect(error).to.equal(false);
        expect(field).to.equal(body.rule.field);
        expect(field_value).to.equal(45);
        expect(condition).to.equal("gte");
        expect(condition_value).to.equal(30);
        done();
      });
  });
  it("should return success validation for double nesting", (done) => {
    const body = {
      rule: {
        field: "missions.count",
        condition: "gte",
        condition_value: 30,
      },
      data: {
        name: "James Holden",
        crew: "Rocinante",
        age: 34,
        position: "Captain",
        missions: {
          count: 45,
          successful: 44,
          failed: 1,
        },
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
          "field missions.count successfully validated."
        );
        expect(error).to.equal(false);
        expect(field).to.equal("missions.count");
        expect(field_value).to.equal(45);
        expect(condition).to.equal("gte");
        expect(condition_value).to.equal(30);
        done();
      });
  });
});
