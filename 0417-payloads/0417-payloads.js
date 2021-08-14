// Filename: 0417-payloads.js
// Course: Dicoding- Back End Basics
// Description: Module 0417 Membangun Web Service menggunakan Node.js- Body/payload request
// Repository: 55-dicoding-backend-basic
//
// Author: Yugo Gautomo
// Status: Final August 01, 2021

const Hapi = require('@hapi/hapi');
const routes = require('./0417-routes');

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
// node 0417-payloads/0417-payloads.js

// Endpoint on port 5000 with HTTP method, path, route, querystrings and payloads
// Payloads {username: "harrypotter", password: "encryptedpassword"}
// [GET/POST] `http://localhost:5000/login`						// Visual Studio terminal
// [GET/POST] `http://{{IP_ADDRESS}}:5000/login`

// Test HTTP server status on port 5000 with method, path hello/{{Name}}, route 'login', querystrings and payloads- returns API status
// Web `http://{{IP_ADDRESS}}:5000/login`
// Postman [GET/POST] `http://{{IP_ADDRESS}}:5000/login`		// Postman 0417-payloads

// curl [-X GET/POST] \
//	-i \
//	-d "{\"username\": \"harrypotter\", \"password\": \"encryptedpassword\"}" \
//	"http://{{IP_ADDRESS}}:5000"

// curl [-X GET/POST] \
//	-i \
//	-d "{\"username\": \"harrypotter\", \"password\": \"encryptedpassword\"}" \
//	"http://{{IP_ADDRESS}}:5000/login"

// curl [-X GET/POST] \
//	-i \
//	-d "{\"username\": \"harrypotter\", \"password\": \"encryptedpassword\"}" \
//	"http://{{IP_ADDRESS}}:5000/hello/{{name}}"