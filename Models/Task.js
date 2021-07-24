const mongose = require("mongoose");

const TaskSchema = new mongose.Schema({
  name: {
    type: String,
    required: [true, "must provide a name"],
    trim: true,
    maxlength: [20, "name can not be than 20 carracters"],
  },
  completed: {
    type: Boolean,
    default: false, 
  },
});
module.exports = mongose.model("Task", TaskSchema);
