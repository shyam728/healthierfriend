var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../modal/formModal')

/* GET home page. */
router.get('/', function(req, res, next) {
     res.send('hello world');
});

router.post('/submitdata', async function(req,res){
    try {
        const { name , email , password , age , height , weight , healthConditions , fitnessGoals } = req.body;
        const newuser = new User({
         name,
         email , password , age , height , weight , healthConditions , fitnessGoals
        });
        console.log( name,
          email , password , age , height , weight , healthConditions , fitnessGoals);
        await newuser.save();
        
        res.status(200).json({ message: "New user added successfully", user: newuser });
        console.log("submit");
      } catch (error) {
        console.error('Error:', error);
        res.status(500).send(error);
      }
})



router.post('/checklogin', async function (req, res, next) {
  console.log(req.body);

  try {
    const result = await User.findOne({
      email: req.body.email,
      password: req.body.password
    });

    if (result) {
      res.status(200).json({ status: true, data: result, message: 'Login Successful...' });
    } else {
      res.status(200).json({ status: false, data: [], message: 'Invalid email/password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: false, data: [], message: 'Server Error...' });
  }
});



module.exports = router;
