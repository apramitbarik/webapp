var http = require('http')
var url = require('url')

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response){
  var pathName = url.parse(request.url).pathname
  console.log('pathname' + pathName);
  showPage(response,pathName)
}

function showPage(response, pathName){
	if(pathName === '/'){
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write(contentMap['/']);
  response.end();
 }
}

var contentMap = {

 '/': '<h1>Welcome to TGS India</h1>',
 '/contact' : '<h1> Contact Page</h1>'
}