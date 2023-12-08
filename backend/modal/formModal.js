const mongoose =require('mongoose');

const formSchema = new mongoose.Schema({

   
   
    name: {
        type:String,
        require:true
        },
   
    email: String, 
    password: String,
    age: Number,
    height: Number,
    weight: Number,
    healthConditions: [String],
    fitnessGoals: [String] 
},
{
    timestamps:true
  })

  const User = mongoose.model('User',formSchema);
  module.exports =User;