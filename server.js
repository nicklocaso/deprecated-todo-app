"use strict";

const express = require("express");
const app = express();

const port = 3000;

app.use(express.static("public"));

app.use(express.json());

app.get("/check-status", (req, res, next) => {
  const message = "It's working!";
  console.log(message);
  res.status(200).json({ message });
  next();
});

app.listen(port, () => {
  console.log(`Server ready on ${port}`);
});
