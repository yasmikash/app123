const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.json({ message: "it works" });
});

app.listen(3001);
