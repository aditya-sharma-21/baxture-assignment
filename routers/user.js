const express = require("express");

const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getAllUser);

router.get("/:id", userController.getUserById);

router.post("/", userController.postUser);

router.put("/:id", userController.putUser);

router.delete("/:id", userController.deleteUserById);

module.exports = router;
