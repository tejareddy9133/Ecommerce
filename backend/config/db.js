const mongoose = require("mongoose");
//connection

const connection = mongoose.connect(
  "mongodb+srv://reddyvaritejeshkumarreddy:reddy9133@cluster0.ezzum8l.mongodb.net/"
);

//exporting

module.exports = connection;
