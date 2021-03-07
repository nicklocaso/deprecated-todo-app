"use strict";

const env = process.env.ENV || "development";
const port = process.env.PORT || 3000;

console.log(`Starting todo-app in ${env} on port ${port}`);

const app = require("./app");

app.listen(port, () => {
  console.log(`Server ready on ${port}`);
});
