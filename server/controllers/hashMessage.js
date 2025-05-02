const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
  const messageBytes = utf8ToBytes(message);
  const hash = keccak256(messageBytes);
  return hash;
}

module.exports = hashMessage;
