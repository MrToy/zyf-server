const Router = require('koa-router')
const mongo = require('mongodb')
const router = new Router()

router.get('/',async ctx=>{
	ctx.body=await ctx.mongo.collection('article')
		.find({},{content:0})
		.sort({date:-1})
		.limit(parseInt(ctx.query.limit)||0)
		.skip(parseInt(ctx.query.skip)||0)
		.toArray()
})

router.get('/:id',async ctx=>{
	ctx.body=await ctx.mongo.collection('article').findOne({_id:mongo.ObjectId(ctx.params.id)})
})

router.post('/',async ctx=>{
	var data=ctx.request.body
	await ctx.mongo.collection('article').insert(data)
	ctx.status=201
})

router.delete('/:id',async ctx=>{
	await ctx.mongo.collection('article').remove({_id:mongo.ObjectId(ctx.params.id)})
	ctx.status=204
})

router.put('/:id',async ctx=>{
	var data=ctx.request.body
	await ctx.mongo.collection('article').update({_id:mongo.ObjectId(ctx.params.id)},data)
	ctx.status=204
})

module.exports=router
