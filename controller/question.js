// const express = require("express");
// const router = express.Router();
// const Question = require("../db/models/question.model");

// //get all questions
// router.get("/", async (req, res) => {
//   try {
//     const questions = await Question.find({});
//     res.json(questions);
//   } catch (e) {
//     console.log(e);
//   }
// });

// //get one question by id 
// router.get("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const question = await Question.findById(id);
//     res.json(question);
//   } catch (e) {
//     console.log(e);
//   }
// });

// //create a new question
// router.post("/", async (req, res) => {
//   try {
//     const newQuestion = new Question(req.body);
//     await newQuestion.save();
//     const question = await Question.find({});
//     res.json(question);
//   } catch (e) {
//     console.log(e);
//   }
// });

// //update a question
// router.put("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Question.findByIdAndUpdate(id, req.body, {
//       runValidators: true,
//       new: true,
//     });
//     const questions = await Question.find({});
//     res.json(questions);
//   } catch (e) {
//     console.log(e);
//   }
// });

// //delete a question
// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     await Question.findByIdAndDelete(id);
//     const questions = await Question.find({});
//     res.json(questions);
//   } catch (e) {
//     console.log(e);
//   }
// });

// module.exports = router;
