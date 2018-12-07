module.exports = app =>{

    app.delete('/api/student/:id', deleteStudent);
    app.post('/api/student', createStudent);
    app.get('/api/student', findAllStudents);
    app.get('/api/student/:id',findStudentById)
    app.put('/api/student/:id',updateStudent)


    const studentDao = require('../daos/student.dao.server')

    function createStudent(req, res) {
        studentDao.createStudent(req.body).then(student =>
            res.send(student))
    }
    function deleteStudent(req, res) {
        studentDao.deleteStudent(req.params['id']).then(response => res.send("deleted"))

    }

    function updateStudent(req, res) {
        studentDao.updateStudent(req.params['id'],req.body).then(response => res.send("updated"))

    }

    function findAllStudents(req, res) {
        studentDao.findAllStudents().then(students => res.send(students))
    }

    function findStudentById(req, res) {
        studentDao.findStudentById(req.params['id']).then(student => res.send(student))

    }





};