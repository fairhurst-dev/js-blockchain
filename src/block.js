import shajs from "sha.js";

export default class Block {
  timestamp;
  data;
  prevHash;

  constructor(data, prevHash = "", timestamp = "") {
    this.timestamp = timestamp !== "" ? timestamp : new Date().toISOString();
    this.prevHash = prevHash;
    this.data = data;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return shajs("sha256")
      .update(this.previousHash + this.timestamp + JSON.stringify(this.data))
      .digest("hex");
  }

  isValidHash() {
    return this.hash === this.calculateHash();
  }

  isValidPointer(prevBlock) {
    return this.prevHash === prevBlock.hash;
  }
}
