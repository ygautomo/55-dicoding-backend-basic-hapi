// Filename: 0416-querystrings.js
// Course: Dicoding- Back End Basics
// Description: Module 0416 Membangun Web Service menggunakan Node.js- Query parameter or querystrings
// Repository: 55-dicoding-backend-basic
//
// Author: Yugo Gautomo
// Status: Final August 01, 2021

const Hapi = require('@hapi/hapi');
const routes = require('./0416-routes');

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
// node 0416-querystrings/0416-querystrings.js

// Endpoint on port 5000 with HTTP method, path, route and querystrings
// [GET/POST/PUT/PATCH/DELETE] `http://localhost:5000/route`							// Visual Studio terminal
// [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:5000/route`

// Test HTTP server status on port 5000 with method, path hello/{{Name}}, route 'about' and querystrings- returns API status
// Web `http://{{IP_ADDRESS}}:5000/hello/{{name}}`
// Postman [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:5000/hello/{{name}}`		// Postman 0416-querystrings

// curl [-X GET/POST/PUT/PATCH/DELETE] \
//	"http://{{IP_ADDRESS}}:5000"

// curl [-X GET/POST/PUT/PATCH/DELETE] \
//	"http://{{IP_ADDRESS}}:5000/about"

// curl [-X GET/POST/PUT/PATCH/DELETE] \
//	"http://{{IP_ADDRESS}}:5000/hello/{{name}}"