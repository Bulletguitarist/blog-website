const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/* ===============================
   MIDDLEWARE
================================ */
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

/* ===============================
   MONGODB CONNECTION
================================ */
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then(() => {
  console.log("MongoDB Connected ✅");
})
.catch((err) => {
  console.log("MongoDB Connection Error ❌");
  console.log(err);
});

/* ===============================
   ROUTES
================================ */
app.use("/api/auth", require("./routes/auth"));
app.use("/api/blog", require("./routes/blog"));

/* ===============================
   SERVER START
================================ */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});