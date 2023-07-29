const express = require("express");
const { newContactUsMessage } = require("../controller/contactUs.controller");

const router = express.Router();

router.post("/add", newContactUsMessage);

module.exports = router;
