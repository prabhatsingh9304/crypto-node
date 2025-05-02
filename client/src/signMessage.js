import {secp256k1} from "ethereum-cryptography/secp256k1";
import { toHex,utf8ToBytes } from "ethereum-cryptography/utils";
import  hashMessage  from "./hashMessage.js";

const PRIVATE_KEY = "c610baa1f7f9943acb5073d62890a2e920372c204fca0eacb590b7bdbbecb368";
//const PRIVATE_KEY ="8035ca35262844150ee7e360178e842946eaae241d49c14ff3ad52fb8a5d96c1";
//const PRIVATE_KEY = "264ec02834b463032e652637bf60a2d1cbaed664e641aeecdae799110e528543"

export default async function signMessage(msg) {
  const message = JSON.stringify(msg)
  const messageHash = await hashMessage(message);
  const signature = await secp256k1.sign(messageHash, PRIVATE_KEY);
  const sig = {
    "r": signature.r.toString(),
    "s": signature.s.toString(),
    "recovery": signature.recovery
    
  }
  console.log(sig);
  return sig; // Return signature,recoverybit
}


