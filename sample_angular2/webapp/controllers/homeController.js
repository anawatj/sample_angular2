var express = require('express');
var bodyParser  = require('body-parser');
var mysql = require('mysql');
var homes = express.Router();

homes.use(bodyParser.urlencoded());
homes.use(bodyParser.json());
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'sample_angular2'
});
homes.get('/',function(req,res)
{
	res.send('home page');	
});
homes.get('/register',function(req,res)
{
	res.render('home/register.html');
});
homes.post('/register_save',function(req,res)
{
	//var title = req.body.title;
	//res.setHeader('Content-Type',"application/json");
	//

	// res.json(req.body.firstName);
	connection.connect();

	connection.query('INSERT INTO tbl_register (first_name,last_name,title_id) VALUES(?,?,?)',[req.body.firstName,req.body.lastName,req.body.title], function(err, rows, fields) {
  	if (err) throw err;


  		res.send("Success");
 // 	console.log('The solution is: ', rows[0].solution);
	});

	connection.end();
});
module.exports= homes;
