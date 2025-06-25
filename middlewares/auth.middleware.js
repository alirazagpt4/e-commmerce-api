const jwt = require("jsonwebtoken");

const jwt_secret = process.env.JWT_SECRET;

const authentication = (req, res, next) => {
    const token  = req.headers['authorization']?.split(' ')[1] || req.cookies.token;

    console.log("token", token);

    if(!token){
        res.status(401).json({message:"Unauthorized access, token not provided"});
    }

    try {
          const decoded = jwt.verify(token , jwt_secret);
          console.log("decoded" , decoded);
          req.user = decoded;
          next();
    }
    catch (error) {
        return res.status(401).json({message:"Invalid token"});
    }

}


const isAdmin = (req, res, next) => {
    console.log(req.user.role);
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Only admin can do this" });
    }
    next();
  }

module.exports = {authentication , isAdmin};