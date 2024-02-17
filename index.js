require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRouter = require("./routers/user");

const app = express();

const connect = mongoose.connect(process.env.connectionString);

connect
  .then((db) => {
    console.log("Connected to db Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/users", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
