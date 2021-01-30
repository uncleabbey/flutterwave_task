import chai from "chai";
import chaiHttp from "chai-http";
import sinon from "sinon";
import sinonChai from "sinon-chai";
import "chai/register-should";
import app from "../../src";

chai.use(chaiHttp);
chai.use(sinonChai);
const { expect } = chai;
chai.should();

export { chai, app, expect, sinon };
