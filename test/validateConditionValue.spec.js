/* eslint-disable camelcase */
import { chai, app, expect } from "./helper";

const url = "/validate-rule";

describe("Test Rule.ConditionValue validation middleware", () => {
  it("should return error if condition isn't passed", (done) => {
    const body = {
      rule: {
        field: "missions.count",
        condition: "eq",
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
        const { status, message, data } = res.body;
        expect(res).to.have.status(400);
        expect(status).to.equal("error");
        expect(message).to.equal("rule.condition_value is required.");
        expect(data).to.equal(null);
        done();
      });
  });
});
