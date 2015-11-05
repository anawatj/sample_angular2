var express = require('express');
var masters = express.Router();
masters.get("/",function(req,res)
{
		res.send("Hello World");
});
masters.get('/title',function(req,res)
{
		var titles = [
			{code:"T01" ,text:"Mr"},
			{code:"T02", text:"Mrs"},
			{code:"T03",text:"Ms"}

		];
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify(titles));
});
masters.get('/province',function(req,res)
{
		var provinces =
		[
			{code:"P01" ,text:"Bangkok"},
			{code:"P02", text:"Nontaburi"}
			];
		res.setHeader('Content-Type',"application/json");
		res.send(JSON.stringify(provinces));
});
masters.get("/amphur",function(req,res)
{
		var param = req.query.province_id;
		if(param=="P01")
		{
			var amphurs = [
				{code:"A01" ,text:"Pranakorn"},
				{code:"A02",text:"Bangrak"}
			];
			res.setHeader('Content-Type',"application/json");
			res.send(JSON.stringify(amphurs));

		}else 
		{
			var amphurs = [
				{code:"A03" ,text:"Moung"},
				{code:"A04",text:"Parket"}
			];
			res.setHeader('Content-Type',"application/json");
			res.send(JSON.stringify(amphurs));
		}
})
module.exports = masters;