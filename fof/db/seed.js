const mongoose = require('./connection');
const { connection } = mongoose;

const User = require('../db/models/user.model');
const userData = require('../db/seed-data/user.json');

// const Question = require('./models/question.model');
// const questionData = require('../db/seed-data/question.json');
// .then(()=> Question.deleteMany({}))
// .then(() => Question.insertMany(questionData.questions))

// const Quiz = require('./models/quiz.model');
// const quizData = require('../db/seed-data/quiz.json');
// .then(()=> Quiz.deleteMany({}))
// .then(() => Quiz.insertMany(quizData.quizzes))


User.deleteMany({})
.then(()=>{
    return User.insertMany(userData.users);
})
.catch(e=>{
    console.log('USER SEED ERROR');
    console.log(e);
})
.finally(() => {
    connection.close();
  });

