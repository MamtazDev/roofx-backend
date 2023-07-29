require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@cluster0.6ds5s8q.mongodb.net/roofx`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connection success!");
  } catch (err) {
    console.log("MongoDB connection failed", err.message);
  }
};

module.exports = connectDB;
