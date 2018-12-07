module.exports = app =>{

    app.delete('/api/question/:id', deleteQuestion);
    app.post('/api/question', createQuestion);
    app.get('/api/question', findAllQuestions);
    app.get('/api/question/:id',findQuestionById)
    app.put('/api/question/:id',updateQuestion)



const questionDao = require('../daos/question.dao.server')



    function createQuestion(req, res) {
        questionDao.createQuestion(req.body).then(question => res.send(question))
    }
    function deleteQuestion(req, res) {
        questionDao.deleteQuestion(req.params["id"]).then(response => res.send("deleted"))


    }

    function updateQuestion(req, res) {
        questionDao.updateQuestion(req.params["id"],req.body).then(response => res.send("updated"))

    }

    function findAllQuestions(req, res) {
        questionDao.findAllQuestions().then(questions => res.send(questions))
    }

    function findQuestionById(req, res) {
        questionDao.findQuestionById(req.params["id"]).then(question => res.send(question))

    }

};