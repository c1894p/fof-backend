const express = require('express');
const app = express()
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


app.set("port", process.env.PORT || 3000)

app.listen(app.get("port"), ()=>{
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
})