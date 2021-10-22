const express = require("express");
const Problem = require("./problem.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const problems = await Problem.find();
  res.json(problems);
});

router.post("/newProblem", async (req, res) => {
  const newProblem = new Problem({
    title:req.body.title,
    description: req.body.description,
    flair:req.body.flair
  })
  try {
   const savedNow = await newProblem.save();
  res.send(savedNow._id);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get("/:_id", async (req, res) => {
  const problem = await Problem.findById(req.params._id);
  res.json(problem);
});

router.delete("/:_id", async (req, res) => {
  const deleteProblem = await Problem.findByIdAndDelete(req.params._id);
  res.redirect("/problem");
});

module.exports = router;
