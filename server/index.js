const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome our chat app APIs");
})

const port = process.env.PORT || 5000;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server running on port... : ${port}`);
})

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connection established'))
  .catch((e) => console.log("MongoDB connection fail: ", e.message));


