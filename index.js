const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    res.send({ name: req.query.name });
  })
  .listen(3000);
