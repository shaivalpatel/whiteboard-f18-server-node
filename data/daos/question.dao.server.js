const questionModel = require('../models/question.model.server');


function findAllQuestions(){
    return questionModel.find();
}

function findQuestionById(id){
    return questionModel.find({_id: id});
}

function updateQuestion(id,question){
    return questionModel.update({_id: id},{$set:question});
}

function deleteQuestion(id){
    return questionModel.remove({_id: id});
}
function createQuestion(newQuestion){
    return questionModel.create(newQuestion);
}

module.exports = { findAllQuestions,
    findQuestionById,
    updateQuestion,
    deleteQuestion,
    createQuestion
}