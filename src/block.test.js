import Block from "./block";

describe("Block", () => {
  let block = new Block({ data: "test data" }, "0");
  test("can be created", () => {
    expect(block).not.toBe(null);
  });
  test("calculates hash", () => {
    const actual = block.calculateHash();
    expect(actual.length).toEqual(64);
  });
  test("checks valid hash", () => {
    expect(block.isValidHash()).toBe(true);
  });
  test("checks valid pointer", () => {
    const newBlock = new Block({ data: "new data" }, block.hash);
    expect(newBlock.isValidPointer(block)).toBe(true);
  });
});
