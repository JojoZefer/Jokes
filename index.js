const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res)=> {
	if(req.url == '/jokes' && req.metod == 'GET'){
		getALLJokes(req, res);
	}
})

server.listen(3000);
