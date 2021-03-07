"use strict";

const mongojs = require("mongojs");

// DATABASE initialization
let db;
if (!db) {
  db = mongojs(process.env.MONGO_URL);

  db.on("error", function (err) {
    console.log("Database error", err);
  });

  db.on("connect", function () {
    console.log("Database connected");
  });
}

recordEvent({ text: "server connection established", type: "CONNECTION" });

//

function recordEvent({ text, type, date }) {
  console.log("recordEvent");
  return new Promise((resolve, reject) => {
    db.collection("events").insert(
      { text, type: type || "NO-TYPE", date: date || new Date() },
      (error, docs) => {
        if (error) return reject(error);
        return resolve(docs);
      }
    );
  });
}

module.exports = exports = (req, res, next) => {
  Object.assign(res.locals, {
    database: {
      recordEvent,
    },
  });
  next();
};
