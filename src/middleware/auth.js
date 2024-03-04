const bcrypt = require("bcrypt");

const User = require("../users/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    console.log("req.body.password before hash: ", req.body.password);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds); // a hashed password

    req.body.password = hashedPassword; // swap the value 'helloworld' in req.body.password to the value of hashedPassword
    console.log("req.body.password after hash: ", req.body.password);
    next();
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const comparePass = async (req, res, next) => {
  try {
    //compare passwords
    inputPass = req.body.password;

    const user = await User.findOne({ where: { username: req.body.username } });

    const matched = await bcrypt.compare(
      req.body.password,
      user.dataValues.password
    );

    //attach user to request
    req.user = user;

    if(!matched){
      return res.status(401).json({ message: "Invalid password" });
    };

    next();
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = {
  hashPass: hashPass,
  comparePass: comparePass,
};