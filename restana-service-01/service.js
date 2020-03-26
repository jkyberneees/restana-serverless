const service = require('restana')()

service.get('/hi', (req, res) => {
  res.send({
    msg: 'Hello World from restana service!'
  })
})

module.exports = service
