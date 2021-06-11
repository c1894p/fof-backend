const mongoose = require("../connection");

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
    },
    options : {
        A: String,
        B: String,
        C: String,  
        D: String
    },
    answer:{
        type: String,
    }
  });

  const Question = mongoose.model("Question", questionSchema);

  module.exports = Question;