const BookAppointment = require("../models/bookAppointment.model");

const addBookAppointment = async (req, res) => {
  try {
    const { name, phone, location, message } = req.body;

    const newApponintment = new BookAppointment({
      name,
      phone,
      location,
      message,
    });

    await newApponintment.save();
    res.status(200).send({
      message: "Appointment Booked",
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addBookAppointment,
};
