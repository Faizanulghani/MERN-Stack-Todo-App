let mongoose = require("mongoose");

let todoSchema = mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  date: Date,
  completed: {
    type: Boolean,
    default: false,
  },
},
  {timestamps:true}
);

module.exports = mongoose.model("TodoItem",todoSchema)