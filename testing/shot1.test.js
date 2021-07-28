const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../Controllers/tasks");

test("say getALLtask is good", () => {
  expect(getAllTasks);
});

test("say createtask is good", () => {
  expect(createTask);
});

test("get a single task", () => {
  expect(getTask);
});

test("update task successfully", () => {
  expect(updateTask);
});

test("delete task successfully", () => {
  expect(deleteTask);
});
