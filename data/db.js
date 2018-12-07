module.exports = function () {
    const mongoose = require('mongoose');
    const databaseName = 'white-board';
    var   connectionString =
        'mongodb://localhost/';
    connectionString += databaseName;

    const hurl = "mongodb://shaival:Shaival123@ds127954.mlab.com:27954/heroku_414kdl1k"
    mongoose.connect(hurl);
};