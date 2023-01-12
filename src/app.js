const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./config/database");
const dbModel = require("./models");

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
db.sequelize
  .authenticate()
  .then(() => {
    db.sequelize.sync().then(() => {
      console.log("Sync Successfully");
    });

    app.listen(3000, () => {
      console.log("listening on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error" + err.message);
  });
