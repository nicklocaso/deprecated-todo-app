"use strict";

const express = require("express");
const app = express();
const routes = require("./routes");
const database = require("./utils/database");

// Serving client build folder
app.use(express.static("public"));

// Body parsing requests
app.use(express.json());

// Database middleware
app.use(database);

// Loggin middleware
app.use(async (req, res, next) => {
  next();
  let text = `FROM:[${req.ip}]>${req.method}:${req.path}`;
  try {
    await res.locals.database.recordEvent({
      text,
      ip: req.ip,
      type: "REQUEST",
    });
    console.log(text);
  } catch (error) {
    console.log(error);
  }
});

// Routing
app.use(routes);

// 404 Page Not Found
app.use((req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});

// Requests error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
    stack: err.stack,
  });
});

module.exports = exports = app;
