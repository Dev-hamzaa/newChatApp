const { chatModel } = require("../models/chat");

const createChat = async (req, res) => {
  try {
    const { participants, chatType } = req.body;

    if (!participants || participants.length === 0 || !chatType) {
      return res.status(400).json({
        message: "Please Provide Correct Details",
      });
    }

    const newChat = new chatModel({
      participants: participants,
      chatType: chatType,
    });
    const savedChat = await newChat.save();
    return res.status(201).json({
      "chat Creation": "Success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

const allChat = async (req, res) => {
  try {
    const allChats = await chatModel.find();

    return res.json({
      Chats: allChats,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
    });
  }
};

module.exports = {
  createChat,
  allChat,
};
