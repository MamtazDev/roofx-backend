const Subscriber = require("../models/subscriber.model");
const { sendEmail } = require("../utils/sendEmail");

const addSubscriber = async (req, res) => {
  try {
    const email = req.body.email;

    const isExist = await Subscriber.findOne({ email: email });

    if (isExist) {
      res.status(400).send({
        message: "Email already exists",
        status: 400,
      });
    } else {
      const newSubscriber = new Subscriber({
        email,
      });

      await newSubscriber.save();
      await sendEmail(email);
      res.status(200).send({
        message: "Successfully subscribed",
        status: 200,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
};

module.exports = {
  addSubscriber,
};
