const { getRandomBytesSync } = require("ethereum-cryptography/random");
const { toHex } = require("ethereum-cryptography/utils");
const secp = require("ethereum-cryptography/secp256k1");
const getAddress = require("../getAddress");

const privateKey = getRandomBytesSync(32);
const publicKey = secp.getPublicKey(privateKey);


const walletAddress = getAddress(publicKey);

console.log("Private Key (Hex):", toHex(privateKey));
console.log("Public Key (Hex):", toHex(publicKey));
