let express = require("express")
let todoItemsRouter = express.Router()

let todoItemsController = require("../controller/todoItemsController")

todoItemsRouter.post('/',todoItemsController.createTodoItem)

module.exports = todoItemsRouter