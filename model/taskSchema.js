const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your Name"],
  },
  type: {
    type: String,
  },
  userid: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  
});

module.exports = mongoose.model("Task", taskSchema);
