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

// Routing
app.use(routes);

// Requests error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.send("Internal Server Error");
});

module.exports = exports = app;
