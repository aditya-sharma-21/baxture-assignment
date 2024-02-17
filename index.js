require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRouter = require("./routers/user");

const app = express();

const connect = mongoose.connect(process.env.connectionString);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res, next) => {
  return res.status(200).send({
    message: "Welcome to Baxture Assignment backend server",
  });
});
app.use("/api/users", userRouter);

app.listen(process.env.PORT, async () => {
  await connect
    .then((db) => {
      console.log("Connected to db Successfully");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`Server is running on PORT ${process.env.PORT}`);
});

module.exports = app;
