const Router = require('koa-router')
const router = new Router()

router.get('/:name',async ctx=>{
	ctx.body=await ctx.mongo.collection('config').findOne({_id:ctx.params.name},{_id:0})||{}
})

router.put('/:name',async ctx=>{
	await ctx.mongo.collection('config').update({_id:ctx.params.name},ctx.request.body,{upsert:true})
	ctx.status=204
})

module.exports=router
