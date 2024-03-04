const { Router } = require("express");
const postRouter = Router();

const cntrlFuncs = require("./controllers"); //controller functions

postRouter.post("/createPost", cntrlFuncs.createPost);
postRouter.get("/timeline", cntrlFuncs.displayPosts);
postRouter.get("/post/:postId", cntrlFuncs.displaySinglePost)

module.exports = postRouter;