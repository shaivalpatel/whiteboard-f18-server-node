module.exports = app =>{
    app.delete('/api/all',truncateDatabase)
    app.post('/api/populate',populateDatabase)

    const universityDao = require('../daos/university.dao.server')

    function truncateDatabase(req, res) {
        universityDao.truncateDatabase().then(output => res.send("deleted") )


    }

    function populateDatabase(req, res) {
        universityDao.populateDatabase().then(output => res.send("added"))

    }
};

