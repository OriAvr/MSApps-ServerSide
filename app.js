const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.options("*", cors());

const photos = require("./routes/photos");
app.use("/photos", photos);

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`server run on: http://localhost:${process.env.PORT}`)
);
