const mongoose = require("../connection");
const Question = require("../models/question.model")

const quizSchema = new mongoose.Schema({
    author: {
        type: String,
    },
    title : {
        type: String,
    },
    questions: [Question.schema]
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;