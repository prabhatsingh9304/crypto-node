const express = require("express")
const {userController} = require("../controllers/userController");

const router = express.Router();

router.get("/balance/:address", userController.getBalance);
router.post("/send", userController.sendTransaction);

module.exports = router;