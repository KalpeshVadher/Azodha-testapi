const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get("/predict", (req, res) => {
  res.status(200).json({ score: 0.75 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
