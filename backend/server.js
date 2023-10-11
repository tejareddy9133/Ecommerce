const express = require("express");
const bosyparser = require("body-parser");
const cors = require("cors");
const connection = require("./config/db");
//initialising express app
const app = express();

//configuring middlewares

app.use(bosyparser.json());
app.use(cors());

// indicating port number

const port = 7070;

app.listen(port, () => {
  try {
    connection;
    console.log("app was running");
  } catch {
    console.log("app was not running");
  }
});
