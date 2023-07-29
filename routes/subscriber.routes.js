const express = require("express");
const { addSubscriber } = require("../controller/subscriver.controller");

const router = express.Router();

router.post("/add", addSubscriber);

module.exports = router;
    