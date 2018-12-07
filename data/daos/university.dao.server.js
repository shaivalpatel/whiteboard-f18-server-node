const mongoose = require('mongoose');
const db = mongoose.connection;
const studentModel = require('../models/student.model.server')
const questionModel = require('../models/question.model.server')
const answerModel = require('../models/answer.model.server')

let student1 = {
    _id: 123,
    firstName: "Alice",
    lastName: "Wonderland",
    username:"alice",
    password:"alice",
    gradYear: 2020,
    scholarship: 15000
};

let student2 = {

    _id: 234,
    firstName: "Bob",
    lastName: "Hope",
    username:"bob",
    password:"bob",
    gradYear: 2021,
    scholarship: 12000
};

const question1 ={
    _id: 321,
    question:"Is the following schema valid?",
    points:3,
    questionType: "TRUE_FALSE",
    trueFalse: {isTrue:false}
};

const question2 ={
    _id: 432,
    question:"DAO stands for Dynamic Access Object.",
    points:11,
    questionType: "TRUE_FALSE",
    trueFalse:{isTrue:false}
};

const question3 ={
    _id: 543,
    question:"What does JPA stand for?",
    points:5,
    questionType: "TRUE_FALSE",
    multipleChoice:{choices:"blah,bruh,duh,Java Persistence Associations",correct:4},
    trueFalse:{isTrue:false}
};

const question4 ={
    _id: 654,
    question:"What does ORM stand for?",
    points:1,
    questionType: "TRUE_FALSE",
    multipleChoice:{choices:"xo,oo,brrr,Object RelationalMapping",correct:4},
    trueFalse:{isTrue:false}
};

const answer1 = {
    _id: 123,
    student: 123,
    question:321,
    trueFalseAnswer:false
};

const answer2 = {
    _id: 234,
    student:123,
    question:432,
    trueFalseAnswer:false
};

const answer3 = {
    _id: 345,
    student:123,
    question:543,
    multipleChoiceAnswer:1
};

const answer4 = {
    _id: 456,
    student:123,
    question:654,
    multipleChoiceAnswer:2
};

const answer5 = {
    _id: 567,
    student:234,
    question:321,
    trueFalseAnswer:false
};

const answer6 = {
    _id: 678,
    student:234,
    question:432,
    trueFalseAnswer:true
};

const answer7 = {
    _id: 789,
    student:234,
    question:543,
    multipleChoiceAnswer:3
};

const answer8 = {
    _id: 890,
    student:234,
    question:654,
    multipleChoiceAnswer:4
};

async function truncateDatabase(){
    await studentModel.collection.drop();
    await questionModel.collection.drop();
    await answerModel.collection.drop();
}
async function populateDatabase(){
    await studentModel.create(student1);
    await studentModel.create(student2);
    await questionModel.create(question1);
    await questionModel.create(question2);
    await questionModel.create(question3);
    await questionModel.create(question4);
    await answerModel.create(answer1);
    await answerModel.create(answer2);
    await answerModel.create(answer3);
    await answerModel.create(answer4);
    await answerModel.create(answer5);
    await answerModel.create(answer6);
    await answerModel.create(answer7);
    await answerModel.create(answer8);
}
module.exports = {
    truncateDatabase,
    populateDatabase
};