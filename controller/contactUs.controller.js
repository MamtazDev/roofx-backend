const ContactUs = require("../models/ContactUs.model");

const newContactUsMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, subject, message } =
      req.body;

    const newContactUs = new ContactUs({
      firstName,
      lastName,
      email,
      phoneNumber,
      subject,
      message,
    });

    await newContactUs.save();
    res.status(200).send({
      message: "Thank you for your message. We will contact with you soon.",
      status: 200,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  newContactUsMessage,
};
