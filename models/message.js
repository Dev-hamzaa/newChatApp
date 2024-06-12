const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  senderId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isdelete: {
    type: String,
    enum: ["me", "eveyone", "none"],
    default: "none",
  },
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chats",
  },
});

const messageModel = mongoose.model("Messages", messageSchema);

module.exports = {
  messageModel,
};
