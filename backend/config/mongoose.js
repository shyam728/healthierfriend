// Require the library
const mongoose = require('mongoose');

// Here we are using the MongoDB URL (i.e., MongoDB Atlas)
const db = "mongodb+srv://ajayagrawal728:y51gLBiA7QMkzKk6@cluster0.jy2j9h3.mongodb.net/?retryWrites=true&w=majority";

// Create an async function to handle the connection
const connectToDatabase = async () => {
    try {
        await mongoose.connect(db, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log('Successfully connected to the database');
    } catch (error) {
        console.error('Failed to connect to the database', error);
    }
};

// Call the async function to connect to the database
connectToDatabase();

 



// id ajayagrawal728
// password y51gLBiA7QMkzKk6
