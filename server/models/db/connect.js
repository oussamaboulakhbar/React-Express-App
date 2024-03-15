import mongoose from "mongoose";

async function connectToDatabase() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/API');
        console.log('DATABASE connected!!!');
    } catch (err) {
        console.error('Error connecting to database:', err);
    }
}

// connectToDatabase();

// Exporting Mongoose connection
export default connectToDatabase;
