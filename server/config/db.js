const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = async () => {
  //   console.log(process.env.MONGO_URI);
  //   dotenv.config();
  //   process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    // console.log(process.env.NODE_ENV);
    // console.log(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    console.log(process.env.MONGO_URI);
    process.exit(1);
  }
};

module.exports = connectDB;
