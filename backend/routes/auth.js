const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "chelawatak";
var fetchuser = require('../middleware/fetchuser');


/////////////////////////////// ROUTE-1 ///////////////////////////////////////////////
//create a user using: POST "api/auth/createuser"  doesn't require auth --> No login required2
router.post(
  "/createuser",[
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password", "Enter a valid email").isLength({ min: 5 }),
    body("email", "Enter a strong password").isEmail(),
  ],
  async (req, res) => {
    // if there are errors , then return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });

    }

    //check whether the user email exist in the database already
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        let success = false;
        return res
          .status(404)
          .json((success,err = "Sorry a user with the same email already exists"));
   
      }
      
      // await is for ruko salt ki value leke jao
      const salt =await bcrypt.genSaltSync(10);
      const secPass=await bcrypt.hash(req.body.password,salt)
      // create a new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const data={
        user:{
          id:user.id
        }
      }

      // res.json(user);
      const auth_token =jwt.sign(data,JWT_SECRET);
      let success=true;
      res.json({success, auth_token});


    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);


/////////////////////////////// ROUTE-2 ///////////////////////////////////////////////
//Authenticate a user using POST:"/api/auth/login" 
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a strong password").exists(),
  ],
  async (req, res) => {
    // if there are errors , then return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      success=false;
      return res.status(400).json({success, errors: errors.array() });

    }

    const{email, password}= req.body
    try {
      let user =await User.findOne({email});
      if(!user){
        success=false;
        return res.status(400).json({success, error:"Please try to login with correct credentials"});

      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if(!passwordCompare){
        success= false;
        return res.status(400).json({success,error:"Please try to login with correct credentials"});
      }

      const data={
        user:{
          id:user.id
        }
      }

      const auth_token =jwt.sign(data,JWT_SECRET);
      success = true;
      res.json({success,auth_token});
    }

    catch (error) {
      console.log(error.message);
      success= false;
      res.status(500).send(success, "Internal Server Error");
    }
  }

)

/////////////////////////////// ROUTE-2 ///////////////////////////////////////////////
// Get logged in user details using : POST "/api/auth/getuser" . Login required

router.post(
  "/getuser",fetchuser,
  async (req, res) => {
    try {
      userId = req.user.id;
      const user = await User.findById(userId).select("-password");
      success  = true;
      res.json({success,user});
    }
    
    catch (error) {
      console.log(error.message);
      success = false;
      res.status(500).send(succcess, "Internal Server Error");
    }
    
  }
)


module.exports = router;
