const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    //get token from header
    const jwtToken = req.header("token");

    //check if not token
    if (!jwtToken) {
      return res.status(403).json("token Not Authorized!");
    }

    // Verify token  -- it is going to give use the user id (user:{id: user.id})
    const payload = jwt.verify(jwtToken, process.env.jwtSecret);
    req.user = payload.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(403).json("Not Authorized!");
  }
};
