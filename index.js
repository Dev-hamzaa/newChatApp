const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const { Server } = require("socket.io");
const { db } = require("./utility/db.js");
const http = require("http");
const mongoose = require("mongoose");
const { chatRouter } = require("./Routes/chat.route.js");
const { messageModel } = require("./models/message.js");
const app = express();

app.use(express.json());

app.use("/api", chatRouter);

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("connected", socket.id);

  // socket.on("private message", async (data) => {
  //   try {
  //     const msg = new messageModel({});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // });
});
server.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});
