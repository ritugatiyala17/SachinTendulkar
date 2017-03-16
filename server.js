var express= require('express'),
	bp= require('body-parser');

var app= express();

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

app.get('/', function(req,res){
	res.send("My server works..yay!!");
});

app.listen(3000,'127.0.0.1');	