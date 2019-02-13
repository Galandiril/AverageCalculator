const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
})

app.post('/', function(req, res){
	var amount = req.body.amount;
	var range = req.body.range;	

	res.send(amount + " " + range);

	avgCount(amount, range);
})

app.listen(3000, function(){
	console.log('Server is working on port 3000');
});

function avgCount(amount, range){
	var liczby = [];

for(i=0; i<amount;i++){
	var x = Math.random()*range;
	x = Math.floor(x);
	liczby[i] = x; 
}
console.log(liczby);

var add = (a,b) =>
	a+b;

sum = liczby.reduce(add);

console.log(sum);
}