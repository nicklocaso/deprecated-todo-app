"use strict";

const express = require("express");
const app = express();

app.get("/check-status", (req, res, next) => {
  const message = "It's working!";
  console.log(message);
  res.locals.database.recordEvent({
    text: "someone checked webapp status",
    type: "REQUEST",
  });
  res.status(200).json({ message });
  next();
});

module.exports = exports = app;
