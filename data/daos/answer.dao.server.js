const answerModel = require('../models/answer.model.server');

function findAnswersByStudent(sid,qid){
    return answerModel.find({student:sid, question:qid});
}

function findAnswersByQuestion(qid,sid){
    return answerModel.find({student:sid, question:qid});
}

function answerQuestion(qid,sid,newAnswer) {
    const answer ={
        _id : newAnswer._id,
        student : sid,
        question : qid,
        trueFalseAnswer : newAnswer.trueFalseAnswer,
        multipleChoiceAnswer : newAnswer.multipleChoiceAnswer}
    ;

    return answerModel.create(answer);
}

function findAllAnswers(){
    return answerModel.find();

}
module.exports = {findAnswersByStudent,
    findAnswersByQuestion,
    answerQuestion,
    findAllAnswers
};