const Koa = require('koa')
const logger = require('koa-logger')
const mongo = require('koa-mongo')
const mount = require('koa-mount')
const koaBody = require('koa-body')
const Router = require('koa-router')
const article = require('./article')
const configs = require('./config')
const user = require('./user')

const apis= new Router()
apis.use('/article',article.routes(),article.allowedMethods())
apis.use('/config',configs.routes(),configs.allowedMethods())
apis.use('/user',user.routes(),user.allowedMethods())

const router= new Router()
router.use('/api',apis.routes(),apis.allowedMethods())


const app = new Koa()
app.use(logger())
app.use(mongo({uri: 'mongodb://mongo/zyf'}))
app.use(koaBody({formidable:{uploadDir:'./upload',keepExtensions:true}}))
app.use(router.routes())
app.on('error', err =>
  console.log('server error', err)
)


app.listen(8080)
