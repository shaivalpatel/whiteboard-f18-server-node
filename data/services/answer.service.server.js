module.exports = app =>{

    app.post('/api/student/:sid/question/:qid/answer', answerQuestion);
    app.get('/api/student/:sid/question/:qid/answer', findAnswersByStudent);
    app.get('/api/question/:qid/student/:sid/answer',findAnswersByQuestion);
    app.get('/api/answer', findAllAnswers);




    const answerDao = require('../daos/answer.dao.server')


    function answerQuestion(req, res) {
        answerDao.answerQuestion(req.params['sid'],req.params['qid'],req.body).then(answer => res.send(answer))

    }

    function findAnswersByStudent(req,res) {
        answerDao.findAnswersByStudent(req.params['sid'],req.params['qid']).then(answers => res.send(answers));

    }

    function findAnswersByQuestion(req,res) {
        answerDao.findAnswersByQuestion(req.params['qid'],req.params['sid']).then(answers => res.send(answers));

    }

    function findAllAnswers(req,res){
        answerDao.findAllAnswers().then((answers) => res.send(answers));
    }
  

};