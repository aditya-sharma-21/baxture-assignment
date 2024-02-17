const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const uuid = require("node-uuid");

const UserSchema = new Schema({
  _id: {
    type: String,
    default: function genUUID() {
      return uuid.v1();
    },
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  hobbies: [
    {
      type: String,
    },
  ],
});

const User = mongoose.model("User", UserSchema);

module.exports.User = User;
