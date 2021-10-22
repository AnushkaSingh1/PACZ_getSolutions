const express = require("express");
const app = express();
const prob = require("./Problem/problem.route");

app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Yay the server works for now");
});

app.route("/problem", prob);

app.listen(PORT, () => {
  console.log(`Connected to PORT:${PORT}`);
});
