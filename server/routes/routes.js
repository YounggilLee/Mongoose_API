const Controller = require('../controllers/controller')

module.exports = (app) => {

    app.get('/api', Controller.greeting)

    app.post('/api/blah', Controller.create)

    app.put('/api/blah:id', Controller.edit)

    app.delete('/api/blah:id', Controller.delete)

    app.get('/api/blah', Controller.index)
}