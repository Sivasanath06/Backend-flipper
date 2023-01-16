var bodyparser = require("body-parser");
var express = require("express");
var cors = require("cors");
var app = express();
app.use(bodyparser.json());
app.use(cors());
const { router } = require("./controllers/stocks");
var mongoose = require("mongoose");
app.use("/", router);
mongoose
  .connect(
    "mongodb+srv://Rohan:fliprHack@cluster0.nljcoos.mongodb.net/Flipr?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to Db"));

app.listen(60900, () => {
  console.log("server connected on port 60900.");
});
