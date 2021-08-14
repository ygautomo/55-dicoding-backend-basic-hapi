// Filename: 0414-methodroutingrequest.js
// Course: Dicoding- Back End Basics
// Description: Module 0414 Membangun Web Service menggunakan Node.js- Method/Verb request dan routing
// Repository: 55-dicoding-backend-basic
//
// Author: Yugo Gautomo
// Status: Final August 01, 2021

const Hapi = require('@hapi/hapi');
const routes = require('./0414-routes');

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
// node 0414-methodroutingrequest/0414-methodroutingrequest.js

// Endpoint on port 5000 with HTTP method and route
// [GET/POST/PUT/PATCH/DELETE] `http://localhost:5000/route`					// Visual Studio terminal
// [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:5000/route`

// Test HTTP server status on port 5000 with method and route 'about'- returns API status
// Web `http://{{IP_ADDRESS}}:5000/about`
// Postman [GET/POST/PUT/PATCH/DELETE] `http://{{IP_ADDRESS}}:5000/about`		// Postman 0414-methodroutingrequest

// curl [-X GET/POST/PUT/PATCH/DELETE] \
//	"http://{{IP_ADDRESS}}:5000"

// curl [-X GET/POST/PUT/PATCH/DELETE] \
//	"http://{{IP_ADDRESS}}:5000/about"