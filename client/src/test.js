import  signMessage  from "./signMessage.js";

const msg = {
    "recipient":"845219acf152dd219f9467baf575bcd8be7782b6a7fd9d4d801125c959c5139f72963b026dd703ba7a033d09582ccdbe",
    "amount":10
  }
const sig = signMessage(msg);
console.log(sig);