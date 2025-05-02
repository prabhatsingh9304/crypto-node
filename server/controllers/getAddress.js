const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex } = require("ethereum-cryptography/utils");

async function getAddress(publicKey) {
  //  const formatOfKey = publicKey.slice(0, 1);
  const restOfKey = publicKey.slice(1); //except 1st byte to end
  const hash = keccak256(restOfKey);
  // console.log(hash);
  const last20byte = hash.slice(-20);
  return toHex(last20byte);
}

module.exports = getAddress;
