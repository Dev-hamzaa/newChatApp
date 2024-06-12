const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    participants: [
      {
        type: String,
        required: true,
      },
    ],
    chatType: {
      type: String,
      enum: ["one on one", "group", "broadcast"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const chatModel = mongoose.model("Chats", chatSchema);

module.exports = {
  chatModel,
};
