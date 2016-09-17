//Lets require/import the HTTP module
var http = require('http');
var badd= ['throw away your keyboard', 'you suck', 'you call that coding?', 'my mother can do better than that']
var goodd= ['you are the best coder i ever saw', 'good work XD', 'you have the fingers of a GOD', 'your keyboard must be golden']

var random = Math.floor(Math.random()*3);
var index1 = goodd[random];
var index2 = badd[random];


//Lets define a port we want to listen to
var PORT=8080;


//Create a server
var server = http.createServer(function (request, response){
    // response.statusCode = 503;
    response.end('It Works!! Path Hit: ' + request.url);
});

//Lets start our server
server.listen(7000, function(){
	PORT=7000
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
    console.log(index1)

});
server.listen(7500, function(){
	PORT=7500
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
    console.log(index2)
});
