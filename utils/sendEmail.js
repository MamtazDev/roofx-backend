require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (email) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.NODEMAILER_GMAIL_USER,
      pass: process.env.NODEMAILER_GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.NODEMAILER_GMAIL_USER,
    to: email,
    subject: "CONGRATULATIONS!",
    html: `<p>Hi there, ${email}.</p>
    <p>Thanks for the subcription!</p>
  `,
  };
  const result = transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      return true;
    }
  });
};

module.exports = {
  sendEmail,
};
