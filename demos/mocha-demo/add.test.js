import add from "./add.js";
import chai from "chai";
const { expect } = chai;

describe("加法函数测试", function () {
  it("1+1 should be equal 2", function () {
    expect(add(1, 1)).to.equal(2);
  });
});
