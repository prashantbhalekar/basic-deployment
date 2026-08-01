const express = require("express");

const app = express(express.json());

app.get("", (req, res) => {
  res.send(
    "Updated Deployment with Base Deployment to Github Action!!!\n\nDeployed Again!!!",
  );
});

app.get("/json", (req, res) => {
  res.json({
    success: true,
  });
});

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
