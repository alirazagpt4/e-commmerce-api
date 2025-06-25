const express = require('express');
const router = express.Router();
const {authentication} = require("../middlewares/auth.middleware")
const { registerUser , loginUser , userProfile} = require("../controllers/user.controller")



// User registration endpoint
router.post('/users/register' , registerUser);

// User login endpoint
router.post('/users/login' , loginUser);

router.get("/users/profile" ,authentication ,  userProfile);


module.exports = router;