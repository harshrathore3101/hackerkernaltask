const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
  },
  mobile: {
    type: String,
    required: [true, "Please Enter Your Mobile"],
  },

  taskid :{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Task"
  }

});

module.exports = mongoose.model("user", userSchema);
