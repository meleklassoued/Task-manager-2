const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const app = express();
const port = 5000;
require("dotenv").config();
//!midelware

app.use(express.static("./public"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Task manager app");
});
app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`we are listening on the port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
start();