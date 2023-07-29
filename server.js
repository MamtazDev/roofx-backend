const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});