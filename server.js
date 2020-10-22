const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,

  // Default is true. Setting to false allows findOneAndUpdate() to be used rather than 
  // findAndModify()
  useFindAndModify: false,
  useUnifiedTopology: true
});

// Defining out HTML and API routes to use
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
    console.log(`App is listening on ${PORT}!`);
});