const express = require("express");
const server = express();
const userRouter = require("./users/users-router");
const postRouter = require("./posts/posts-router");

server.use(express.json());
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
