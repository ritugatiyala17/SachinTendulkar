var express= require('express'),
	bp= require('body-parser');

var app= express();

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

app.listen(3000,'127.0.0.1');	