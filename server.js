const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000;

const contactUsRoutes = require("./routes/contactUs.routes");
const bookAppointmentRoutes = require("./routes/bookAppointment.routes");
const subscriberRoutes = require("./routes/subscriber.routes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

// routes
app.use("/api/contactUs", contactUsRoutes);
app.use("/api/bookAppointment", bookAppointmentRoutes);
app.use("/api/subscribe", subscriberRoutes);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
