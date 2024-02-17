const { User } = require("../models/Users");
const logger = require("winston");

const CLASS_NAME = "USER_CONTROLLERS path :- ./controllers/userController";

module.exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.find({});
    res.send(user);
  } catch (error) {
    logger.error(`[${CLASS_NAME}] getAllUser error :- ${error.message}`);
    res.send(400, error.message);
  }
};

module.exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.send(user);
  } catch (error) {
    logger.error(`[${CLASS_NAME}] getUserById error :- ${error.message}`);
    res.send(400, error.message);
  }
};

module.exports.postUser = async (req, res, next) => {
  try {
    let { username, age, hobbies } = req.body;

    let user = await User.findOne({ username });

    if (user) return res.send("Username already exist.");

    user = await User.create({ username, age, hobbies });
    user.save();

    res.send(user);
  } catch (error) {
    logger.error(`[${CLASS_NAME}] postUser error :- ${error.message}`);
    res.send(400, error.message);
  }
};

module.exports.putUser = async (req, res, next) => {
  try {
    let updateUser = req.body;
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $set: updateUser },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    logger.error(`[${CLASS_NAME}] putUser error :- ${error.message}`);
    res.send(400, error.message);
  }
};

module.exports.deleteUserById = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user)
      return res.status(404).send("The User with the given ID was not found");
    res.send(user);
  } catch (error) {
    logger.error(`[${CLASS_NAME}] deleteUserById error :- ${error.message}`);
    res.send(400, error.message);
  }
};
