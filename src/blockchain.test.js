import Blockchain from "./blockchain";
import Block from "./block";

describe("Blockchain", () => {
  let ledger = new Blockchain();
  test("can be created", () => {
    expect(ledger).not.toBe(null);
  });
  test("creates genesis block", () => {
    const actual = ledger.createGenesisBlock();
    expect(actual.data).toEqual("Genesis Block");
    expect(actual instanceof Block).toBe(true);
  });
  test("can add blocks", () => {
    ledger.addBlock({ data: "data 1" });
    ledger.addBlock({ data: "data 2" });
    expect(
      ledger.chain[0] instanceof Block &&
        ledger.chain[1] instanceof Block &&
        ledger.chain[2] instanceof Block
    ).toBe(true);
    expect(ledger.chain.length).toBe(3);
  });
  test("gets last block", () => {
    const actual = ledger.getLastBlock();
    expect(actual.data).toEqual("data 2");
  });
  describe("validates chain", () => {
    test("", () => {
      //TODO
    });
  });
});
