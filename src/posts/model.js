const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Post = sequelize.define("Post", {
    image: {
        type: DataTypes.STRING, //will hold url
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    }
},
{ timestamps: true });

module.exports = Post;