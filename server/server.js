const express = require('express');
const mongoose = require('mongoose');//mongoose 是操作mongodb封装的方法
//链接moogodb
const DB_URL = 'mongodb://127.0.0.1:27017/imooc';
mongoose.connect(DB_URL);//链接数据库

mongoose.connection.on('connected',function(){//监听事件
	
	console.log('mongodb 链接成功 ')
	
});
//类似mysql表，mongo里有文档，字段的概念
const User = mongoose.model('user', new mongoose.Schema({
	name:{ type:String,require:true },
	age:{ type:Number,require:true }
	
}))
//新增数据
//User.create({
//	name:'一米',
//	age:20
//},function(err,doc){
//	if(!err){
//		console.log( doc )
//	}else{
//		console.log( err )
//	}
//	
//	
//})
const app = express();
app.get('/',function(req,res){
	
	res.send('<h1>hello world</h1>');
	
})
app.get('/data',function(req,res){
	//查找整个User
	User.find({},function(err,doc){
		if(!err){
			
			res.json( doc );
		}
	})
	//返回age:20的
//	User.find({age:20},function(err,doc){
//		if(!err){
//			
//			res.json( doc );
//		}
//	})
	//返回一条
//	User.findOne({age:20},function(err,doc){
//		if(!err){
//			
//			res.json( doc );
//		}
//	})
	
//	res.json({
//		
//		name:'千寻001',
//		type:'String'
//		
//	});
	
})
app.get('/delete',function(req,res){
	//删除User
	User.remove({age:20},function(err,doc){
		if(!err){
			
			res.json( doc );
		}
	})

//	res.json({
//		
//		name:'千寻001',
//		type:'String'
//		
//	});
	
})

app.get('/update',function(req,res){
	//删除User
	User.update({name:'千寻'},{"$set":{age:26}},function(err,doc){
		if(!err){
			
			res.json( doc );
		}
	})


	
})
app.listen(9000,function(){
	
	console.log( 'Node app start listen 9000')
	
})
