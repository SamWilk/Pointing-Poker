const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simple test route
app.get("/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
