const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");
const { toHex,utf8ToBytes } = require("ethereum-cryptography/utils");

async function recoverKey(message, signature) {
  const msg = JSON.stringify(message)
  const hashMsg = await hashMessage(msg);
  
  // Convert signature to compact format
  const sig = new secp.Signature(BigInt(signature.r), BigInt(signature.s)).toCompactRawBytes();

  const recoveredKey = secp.recoverPublicKey(hashMsg,sig,signature.recovery);
  //console.log(recoveredKey);
  return recoveredKey;
}

module.exports = recoverKey;
