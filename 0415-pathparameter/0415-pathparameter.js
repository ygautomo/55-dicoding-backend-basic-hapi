// Filename: 0415-pathparameter.js
// Course: Dicoding- Back End Basics
// Description: Module 0415 Membangun Web Service menggunakan Node.js- Path parameter
// Repository: 55-dicoding-backend-basic
//
// Author: Yugo Gautomo
// Status: Final August 01, 2021

const Hapi = require('@hapi/hapi');
const routes = require('./0415-routes');

const init = async () => {
	const server = Hapi.server({
		port: 5000,
		// host: 'localhost',						// Restricted access from localhost only
		host: '0.0.0.0', 							// Publicy access from any ip
    });

	server.route(routes);

	await server.start();
	console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// Running command
// npm run start
// node 0415-pathparameter/0415-pathparameter.js

// Endpoint on port 5000 with HTTP method, path and route
// [GET/POST/PUT/PATCH/DELETE] `http://localhost:5000/route`							// Visual Studio terminal
// [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:5000/route`

// Test HTTP server status on port 5000 with method, path hello/{{Name}} and route 'about'- returns API status
// Web `http://{{IP_ADDRESS}}:5000/hello/{{name}}`
// Postman [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:5000/hello/{{name}}`		// Postman 0415-pathparameter

// curl [-X GET/POST/PUT/PATCH/DELETE] \
//	"http://{{IP_ADDRESS}}:5000"

// curl [-X GET/POST/PUT/PATCH/DELETE] \
//	"http://{{IP_ADDRESS}}:5000/about"

// curl [-X GET/POST/PUT/PATCH/DELETE] \
//	"http://{{IP_ADDRESS}}:5000/hello/{{name}}"