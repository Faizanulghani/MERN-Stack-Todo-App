const TodoItem = require("../models/TodoItem");

exports.createTodoItem = async (req, res) => {
  let { task, date } = req.body;
  let todoItem = new TodoItem({ task, date });
  await todoItem.save();
  res.status(201).json(todoItem);
};

exports.getTodoItems = async (req, res) => {
  const todoItems = await TodoItem.find();
  res.json(todoItems);
};

exports.deleteTodoItem = async (req, res) => {
  let { id } = req.params;
  await TodoItem.findByIdAndDelete(id);
  res.status(204).json({ _id: id });
};
exports.markCompleted = async (req, res) => {
  let { id } = req.params;
  let todoItem = await TodoItem.findById(id);
  todoItem.completed = true;
  await todoItem.save();
  res.json(todoItem);
};
