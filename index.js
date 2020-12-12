const bodyParser = require('koa-bodyparser')
const compose = require('koa-compose')
const compress = require('koa-compress')
const cookieParser = require('koa-cookie').default
const helmet = require('koa-helmet')
const lowercase = require('koa-lowercase')

// eslint-disable-next-line fp/no-mutation
module.exports = compose([
  bodyParser(),
  cookieParser(),
  helmet(),
  helmet.referrerPolicy({ policy: 'same-origin' }),
  helmet.hsts({ maxAge: 31_536_000, preload: true, includeSubDomains: true }),
  compress(),
  lowercase,
])
