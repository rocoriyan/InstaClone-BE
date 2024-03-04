const Post = require("./model");

const createPost = async(req, res)=>{
    try{
        const post = await Post.create({
            image: req.body.image,
            description: req.body.description
        })
        res.status(201).json({ message: "Post was added", post: post });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

const displayPosts = async(req, res)=>{
    try{
        const posts = await Post.findAll({
            limit: 10,
            order: [['createdAt', 'description']], //ordering by time posted. you get 10 most recent posts
        });
        res.status(500).json({ message: "Success: Got 10 posts" });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

const displaySinglePost = async(req, res)=>{
    try{
        const posts = await Post.findOne({ where: { id: req.params.PostId } });
        res.status(500).json({ message: "Success: Got post" });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

/*const deletePost = async(req, res)=>{
    try{
        const post = await Post.findOne({ where: postId = req.body.postId }); //idk if this works
        //you should check that the user logged in is the one that made the post here
        await Post.destroy(post);
        res.send({ message: "Post successfully deleted"});
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
}*/

module.exports = {
    createPost: createPost,
    displayPosts: displayPosts,
    displaySinglePost: displaySinglePost,
};