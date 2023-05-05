const mongoose = require("mongoose");

exports.databaseconnection = () => {
  try {
    mongoose.connect("mongodb://localhost/databasehk");
    console.log("Database connected");
  } catch (err) {
    console.log("Database Error >", err.message);
  }
};