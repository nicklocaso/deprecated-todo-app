"use strict";

const router = require("express").Router();

const ROUTES = require("../routes.json");

router.get(ROUTES.DEBUGGING.CHECK_STATUS, (req, res) => {
  const message = "It's working!";
  res.status(200).json({ message });
});

router.get(ROUTES.DEBUGGING.THROW_ERROR, (req, res) => {
  throw new Error("Not catched error");
});

router.get(ROUTES.DEBUGGING.CATCHED_ERROR, (req, res, next) => {
  try {
    throw new Error("Catched error");
  } catch (error) {
    next(error);
  }
});

module.exports = exports = router;
