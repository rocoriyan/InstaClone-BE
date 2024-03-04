require("dotenv").config();
const express = require("express");

const cors = require("cors");

const User = require("./users/model");
const userRouter = require("./users/routes");

const Post = require("./posts/model");
const postRouter = require("./posts/routes");

const Like = require("./likes/model");
const likeRouter = require("./likes/routes");

const port = process.env.PORT || 5001;

const app = express();

//cors for frontend
app.use(cors());

app.use(express.json());

app.use(userRouter);
app.use(postRouter);
app.use(likeRouter);


const syncTables = async() => {
    try {
        console.log("forming relationships...");
        console.log("\tfor user and post");
        User.hasMany(Post);
        Post.belongsTo(User);
    
        console.log("\tfor post and like");
        Post.hasMany(Like);
        Like.belongsTo(Post);
    
        console.log("\tfor user and like");
        User.hasMany(Like);
        Like.belongsTo(User);
    
        console.log("syncing...");
        await User.sync();
        await Post.sync();
        await Like.sync();
        console.log("tables synced");
    }
    catch (error) {
        console.log("tables failed to sync\nerror:", error);
    }
};

app.get("/health", (req, res) =>{
    res.status(200).json({ message: "API is healthy" });
})

app.listen(port, () => {
    syncTables();
    console.log(`Server is running on port ${port}`);
});