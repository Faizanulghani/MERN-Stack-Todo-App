let express = require("express");
let path = require("path");
const { default: mongoose } = require("mongoose");
let DBPath = "";

let app = express();

const errorController = require("./controller/errors");

app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
app.use(errorController.pageNotFound);

mongoose.connect(DBPath).then(() => {
  app.listen(3001);
});
