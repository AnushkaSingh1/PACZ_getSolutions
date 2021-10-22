const express = require("express");
const Problem = require("./problem.model");

const prob = express();

prob.get("/problem", async (_, res) => {
  const problems = await Problem.find();
  res.json(problems);
});

prob.get("problem/:_id", async (req, res) => {
  const problem = await Problem.findById(req.params._id);
  res.json(problem);
});

prob.post("/problem", async (req, res) => {
  const newProblem = await Problem.create(
    req.body.title,
    req.body.description,
    req.body.flair
  );

  res.json(newProblem);
});

prob.put("/problem/:_id", async (req, res) => {
  const updateProblem = await Problem.findById(req.params._id);
  res.redirect("/problem");
});

prob.delete("problem/:_id", async (req, res) => {
  const deleteProblem = await Problem.findByIdAndDelete(req.params._id);
  res.redirect("/problem");
});

module.exports = prob;
