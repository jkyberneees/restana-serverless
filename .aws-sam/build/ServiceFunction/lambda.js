
const serverless = require('serverless-http')
const handler = serverless(require('./service'))

module.exports.handler = handler
