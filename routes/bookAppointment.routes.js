const express = require("express");
const {
  addBookAppointment,
} = require("../controller/bookAppointment.controller");

const router = express.Router();

router.post("/add", addBookAppointment);

module.exports = router;
