const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const dataPath = path.join(__dirname, 'data');

const server = http.createServer((req, res)=> {
	if(req.url == '/jokes' && req.metod == 'GET'){
		getAllJokes(req, res);
	}
});

server.listen(3000);

function getAllJokes(req, res){
	let dir = fs.readdirSync(dataPath);
	let allJokes = [];
	for(let i = 0; i < dir.length; i++){
		let file = fs.redFileSync(path.join(dataPath, i+'.json'));
		let jokeJSON = Buffer.from(file).toString();
		let joke = JSON.parse(jokeJSON);
		joke.id = i;

		allJokes.push(joke);
	}
	res.end(JSON.stringify(allJokes))
}
