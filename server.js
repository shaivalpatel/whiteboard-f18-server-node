var express = require('express')
var app = express()
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('./data/db')()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
require('./data/services/answer.service.server')(app);
require('./data/services/question.service.server')(app);
require('./data/services/student.service.server')(app);
require('./data/services/university.service.server')(app);
app.get('/' , (req ,res) => res.send("Server is up"));
app.listen(process.env.PORT || 3000);