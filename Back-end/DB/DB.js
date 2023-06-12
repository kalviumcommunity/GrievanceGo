const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://sharvesh:sharvesh123@cluster0.ub4li87.mongodb.net/"
    );
    console.log("Succesfully connected to the database");
  } catch (error) {
    console.log(error);
    console.error("Could not connect to the database");
  }
}

module.exports = connectDB;
