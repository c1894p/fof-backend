const express = require('express');
const app = express()
const port = 3000
const cors = require('cors');

const userController = require('./controller/users');
const questionController = require('./controller/question');
const quizController = require('./controller/quiz');

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userController);
// app.use('/questions', questionController);
app.use('/quizzes', quizController);

app.listen(port, ()=>{
    console.log('Listening on port 3k!!')
})