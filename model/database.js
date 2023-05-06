const mongoose = require("mongoose");

exports.databaseconnection = () => {
  try {
    mongoose.connect("mongodb+srv://mohit123:mohit123@mohit.tjed4.mongodb.net/");
    console.log("Database connected");
  } catch (err) {
    console.log("Database Error >", err.message);
  }
};