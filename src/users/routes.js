const { Router } = require("express");
const userRouter = Router();

const { hashPass, comparePass } = require("../middleware/auth");

const cntrlFuncs = require("./controllers"); //controller functions

userRouter.post("/users/signup", hashPass, cntrlFuncs.signupUser);
userRouter.get("/users/listUsers", cntrlFuncs.listUsers);
userRouter.post("/users/login", comparePass, cntrlFuncs.login)

module.exports = userRouter;