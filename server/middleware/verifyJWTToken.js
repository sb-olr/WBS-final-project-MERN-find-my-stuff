// const Jwt = require("jsonwebtoken");

const verifyJWTToken = async (req, res, next) => {
  try {
    const {
      headers: { authorization },
    } = req;

    if (!authorization) return res.status(401).json({ error: "please login" });

    const token = authorization.split(" ")[1];
    // console.log(token);

    //const { id } = Jwt.verify(token, process.env.JWT_SECRET);

    //const user = await AuthUser.findById(id);
    //if (!user) return next("User does not exist");
    
    req.user = { id: 1 };

    next();
  } catch (e) {
    return next(e);
  }
};

module.exports = verifyJWTToken;