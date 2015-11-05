var express = require('express');
var homes = express.Router();
homes.get('/',function(req,res)
{
	res.send('home page');	
});
homes.get('/register',function(req,res)
{
	res.render('home/register.html');
});
module.exports= homes;
