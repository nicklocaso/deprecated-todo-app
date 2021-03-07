"use strict";

const router = require("express").Router();

router.use(require("./debugging"));
router.use(require("./tasks"));

module.exports = exports = router;
