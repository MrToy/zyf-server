const Router = require('koa-router')
const mongo = require('mongodb')
const router = new Router()
const jwt = require('jsonwebtoken')

//获取用户信息
// router.get('/',async ctx=>{
// 	ctx.body=await ctx.mongo.collection('user').findOne({_id:mongo.ObjectId(ctx.params.id)})
// })

//注册
// router.post('/register',async ctx=>{
// 	var data=ctx.request.body
// 	await ctx.mongo.collection('user').insert(data)
// 	ctx.status=201
// })

//登录
router.post('/login',async ctx=>{
	var data=ctx.request.body
	if(data.name=="admin"&&data.pass=="zyf123456"){
		var data={admin:true}
		ctx.body=Object.assign(data,{token:jwt.sign(data,'toy-secrity')})
	}else
		ctx.status=403
})

//修改用户信息
// router.put('/:id',async ctx=>{
// 	var data=ctx.request.body
// 	await ctx.mongo.collection('user').update({_id:mongo.ObjectId(ctx.params.id)},data)
// 	ctx.status=204
// })

module.exports=router
