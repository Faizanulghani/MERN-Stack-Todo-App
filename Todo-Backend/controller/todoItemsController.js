const TodoItem = require("../models/TodoItem");

exports.createTodoItem = async (req, res) => {
  console.log(req.body);
  let { task, date } = req.body;
  let todoItem = new TodoItem({ task, date });
  await todoItem.save();
  res.status(201).json(todoItem);
};
