//This file will handle the connection logic to the MongoDB database

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://localhost:27017/ToDoErDB", {
    usenewurlparser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB succesfully :D ");
  })
  .catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
  });

// To prevent deprecation warnings from MongoDB native driver
//mongoose.set("useCreateIndex", true);
//mongoose.set("useFindAndModify", false);

module.exports = {
  mongoose,
};
