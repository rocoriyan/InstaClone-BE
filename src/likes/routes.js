const { Router } = require("express");
const likeRouter = Router();

const cntrlFuncs = require("./controllers"); //controller functions

likeRouter.post("/posts/", cntrlFuncs.likePost);
likeRouter.get("/post/:postId/likes", cntrlFuncs.getLikes);

module.exports = likeRouter;