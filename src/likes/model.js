const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Like = sequelize.define("Like", {
    //UserId and PostId
},
{ timestamps: true });

module.exports = Like;