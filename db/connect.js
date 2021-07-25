const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(
    url,
    {
      //!key value pares:
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    },
    console.log("hello world"),
  );
};

module.exports = connectDB;
