const { balances } = require("../config/constants.js");
const recoverKey = require("./recoverKey.js");
const getAddress = require("./getAddress.js");

const getBalance = (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
};

const sendTransaction = async (req, res) => {
  try {
    const { sig, msg } = req.body;
    if (!sig || !msg || !msg.amount || !msg.recipient || !msg.sender) {
      return res.status(400).json({ message: "Invalid request format" });
    }

    if (!balances[msg.recipient]) {
      return res.status(400).json({ message: "Recipient address not found" });
    }

    // Validate sender address matches extracted address from signature
    if (msg.recipient === msg.sender) {
      return res.status(400).json({
        message: "Invalid transaction, You can't transfer to same account",
      });
    }

    const sender = await getSender(msg, sig);

    if (!balances[sender]) {
      return res.status(400).json({ message: "Sender address not found" });
    }

    // Validate sender address matches extracted address from signature
    if (!sender || sender !== msg.sender) {
      return res
        .status(400)
        .json({ message: "Invalid signature or sender address mismatch" });
    }

    // setInitialBalance(sender);
    setInitialBalance(msg.recipient);
    console.log(msg.recipient);
    console.log(balances[sender]);
    console.log(balances[msg.recipient]);

    if (balances[sender] < msg.amount) {
      res.status(400).send({ message: "Not enough funds!" });
    } else {
      balances[sender] -= msg.amount;
      balances[msg.recipient] += msg.amount;
      res.send({ balance: balances[sender] });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

async function getSender(msg, sig) {
  const publicKey = await recoverKey(msg, sig);
  const senderAddress = await getAddress(publicKey);
  return senderAddress;
}

exports.userController = {
  getBalance,
  sendTransaction,
};
