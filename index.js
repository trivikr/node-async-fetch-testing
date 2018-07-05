const express = require("express");
const app = express();

app
  .get("/", (req, res) => {
    if (Math.random() <= 0.3) {
      // Throw error in 30% of the cases
      throw new Error("error");
    } else {
      res.send({ name: req.query.name });
    }
  })
  .listen(3000);
