const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:pass1234@ds061701.mlab.com:61701/heroku_0jhwp1k1", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
// app.use(require("../routes/api.js"));
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
