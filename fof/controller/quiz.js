const express = require("express");
const router = express.Router();
const Quiz = require("../db/models/quiz.model");
const Question = require("../db/models/question.model");

// get all quizzes
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.find({});
    res.json(quizzes);
  } catch (e) {
    console.log(e);
  }
});

//get quiz by ID
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const quiz = await Quiz.findById(id);
    res.json(quiz);
  } catch (e) {
    console.log(e);
  }
});

//create a new quiz
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const newQuiz = new Quiz({
      author: req.body.author,
      title: req.body.title,
    });
    await newQuiz.save();
    res.json(newQuiz);
  } catch (e) {
    console.log(e);
  }
});

// create a question for a specific quiz
router.post("/:id/questions", async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.params;
    const quiz = await Quiz.findById(id);
    const newQuestion = new Question({
      question: req.body.question,
      options: {
        A: req.body.optionA,
        B: req.body.optionB,
        C: req.body.optionC,
        D: req.body.optionD,
      },
      answer: req.body.answer,
    });
    quiz.questions.push(newQuestion)
    quiz.save()
    res.json(quiz);
  } catch (e) {
    console.log(e);
  }
});

//update a quiz
router.put("/:id", async(req,res) =>{
  try{
    const { id } = req.params;
    const quiz = await Quiz.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    })
    res.json(quiz)
  }
  catch(e){
    console.log(e)
  }
})

module.exports = router;
