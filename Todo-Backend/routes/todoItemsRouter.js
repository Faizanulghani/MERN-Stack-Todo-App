let express = require("express")
let todoItemsRouter = express.Router()

let todoItemsController = require("../controller/todoItemsController")

todoItemsRouter.get('/',todoItemsController.getTodoItems)
todoItemsRouter.post('/',todoItemsController.createTodoItem)
todoItemsRouter.delete('/:id',todoItemsController.deleteTodoItem)
todoItemsRouter.put('/:id/completed',todoItemsController.markCompleted)

module.exports = todoItemsRouter