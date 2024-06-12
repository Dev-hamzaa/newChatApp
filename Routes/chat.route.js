const express = require("express");

const chatController = require("../Controller/chat.controller.js");
const chatRouter = express.Router();

chatRouter.post("/chat", chatController.createChat);

chatRouter.get("/chat", chatController.allChat);

module.exports = {
  chatRouter,
};
