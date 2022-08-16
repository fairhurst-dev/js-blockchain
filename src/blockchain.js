import Block from "./block";

export default class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }
  createGenesisBlock() {
    return new Block("Genesis Block", "0", new Date(2022, 8, 16, 0, 0, 0, 0));
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(input) {
    const prevHash = this.getLastBlock().hash;
    const newBlock = new Block(input.data, prevHash);
    this.chain.push(newBlock);
  }

  hasValidGenesisBlock() {
    return this.chain[0] === this.createGenesisBlock();
  }

  isValidChain() {
    for (let i = 1; i < this.chain.length; i++) {
      const currBlock = this.chain[i];
      const prevBlock = this.chain[i - 1];

      if (!currBlock.isValidHash()) {
        return false;
      }
      if (!currBlock.isValidPointer(prevBlock)) {
        return false;
      }

      if (!this.hasValidGenesisBlock()) {
        return false;
      }
    }
    return true;
  }
}
