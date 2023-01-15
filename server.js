var bodyparser = require("body-parser");
var express = require("express");
var app = express();
app.use(bodyparser.json());
const { router } = require("./controllers/stocks");
var mongoose = require("mongoose");
app.use("/", router);
mongoose
  .connect(
    "mongodb+srv://Rohan:fliprHack@cluster0.nljcoos.mongodb.net/Flipr?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Db"));

app.listen(5000, () => {
  console.log("server connected on port 5000.");
});
