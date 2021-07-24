const Task = require("../Models/Task");

const getAllTasks = (req, res) => {
  res.send("all ITEMS FROM HHHH");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("okey I will");
};
const deleteTask = (req, res) => {
  res.send("okey right now");
};
module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
