import { keccak256 } from "ethereum-cryptography/keccak";
import { utf8ToBytes } from "ethereum-cryptography/utils";

export default async function hashMessage(message) {
  const messageBytes = utf8ToBytes(message);
  const hash = keccak256(messageBytes);
  return hash;
}
