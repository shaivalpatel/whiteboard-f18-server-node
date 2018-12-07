const studentModel = require('../models/student.model.server');

function findAllStudents(){
    return studentModel.find();
}
function findStudentById(id){
    return studentModel.find({_id: id});
}
function updateStudent(id,student){
    return studentModel.updateOne({_id: id},student);
}
function deleteStudent(id){
    return studentModel.remove({_id: id});
}
function createStudent(newStudent){
    return studentModel.create(newStudent);
}
module.exports = { findAllStudents,
    findStudentById,
    updateStudent,
    deleteStudent,
    createStudent
}