const express = require("express");
const router = express.Router();
const Contact = require("../models/Contacts");
const { body, validationResult } = require("express-validator");

/////////////////////////////// ROUTE-1 ///////////////////////////////////////////////
//create a user using: POST "api/contacts/contacting"  doesn't require auth --> No login required2
router.post(
  "/contacting",fetchuser,
  [
    body("name", "Enter your name"),
    body("email", "Enter your email"),
    body("message", "What's your message")
  ],
  async (req, res) => {
    try {
      const { name, email, message } = req.body;
      // if there are any error then return a bad request
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const details = new Contact({
        name,
        email,
        message,
        user: req.user.id
      });

      const savedMsg = await details.save();
      res.json(savedMsg);
     

    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
