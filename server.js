const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello! GitHub Actions deployed this app to EC2.");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
app.get("/ready", (req, res) => {
  res.status(200).json({ status: "READY" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
