let express = require("express");
let path = require("path");
let cors = require("cors");
const { default: mongoose } = require("mongoose");
let DBPath = "mongodb+srv://root:root@todo.ghawvsv.mongodb.net/todo?retryWrites=true&w=majority&appName=Todo";

let app = express();

const errorController = require("./controller/errors");
const todoItemsRouter = require("./routes/todoItemsRouter");

app.use(express.urlencoded());
app.use(cors())
app.use(express.json())

app.use('/api/todo',todoItemsRouter)
app.use(errorController.pageNotFound);

mongoose.connect(DBPath).then(() => {
  app.listen(3001);
});
