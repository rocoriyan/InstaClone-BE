const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const User = sequelize.define("User", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},
{ timestamps: false });

module.exports = User;