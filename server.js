const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user.routes");
require("dotenv").config();
const connectDB = require("./config/db");

// middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

connectDB();

// routes
app.get("/", (req, res) => {
  res.send("Test link");
});

app.use("/api/user", userRoutes);

// server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
