const Like = require("./model");

const likePost = async(req, res)=>{
    try{
        const like = await Like.create({
            UserId: req.body.UserId,
            UostId: req.body.PostId,
        })
        res.status(201).json({ message: "Like was added", like: like });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
};

const getLikes = async(req, res)=>{
    try{
        const likes = await Likes.findAll({ where: {postId: req.params.postId} });
        res.status(201).json({ message: "Success: Got likes", likes: likes });
    }
    catch(error){
        res.status(500).json({ message: error.message, error: error });
    }
}

module.exports = {
    likePost: likePost,
    getLikes: getLikes,
};