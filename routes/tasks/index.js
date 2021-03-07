"use strict";

const router = require("express").Router();
const ROUTES = require("../routes.json");

router.get(ROUTES.GET_ALL_TASKS, async (req, res, next) => {
  let docs;
  try {
    docs = await res.locals.database.getTasks(req.body);
  } catch (error) {
    next(error);
  }
  res.status(200).json({ message: "ok", data: docs });
});

router.post(ROUTES.CRATE_TASK, async (req, res, next) => {
  let docs;
  try {
    docs = await res.locals.database.createTasks(req.body);
  } catch (error) {
    next(error);
  }
  res.status(200).json({ message: "ok", data: docs });
});

module.exports = exports = router;
