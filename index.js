const express = require("express");

const app = express(express.json());

app.get("", (req, res) => {
  res.send("Basic Deployment!");
});

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
