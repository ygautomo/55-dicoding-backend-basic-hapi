// Filename: 0415-routes.js
// Course: Dicoding- Back End Basics
// Description: Module 0415 Membangun Web Service menggunakan Node.js- Path parameter
// Repository: 55-dicoding-backend-basic
//
// Author: Yugo Gautomo
// Status: Final August 01, 2021

const routes = [
	{
		method: 'GET',
		path: '/',
		handler: (request, h) => {
			return "Homepage";
		},
	},
	{
		method: '*',
		path: '/',
		handler: (request, h) => {
			return "Halaman tidak dapat diakses dengan method tersebut";
		},
	},
	{
		method: 'GET',
		path: '/about',
		handler: (request, h) => {
			return "About page";
		},
	},
	{
		method: '*',
		path: '/about',
		handler: (request, h) => {
			return "Halaman tidak dapat diakses dengan method tersebut";
		},
	},
	{
		method: 'GET',
		path: '/hello/{name?}',
		handler: (request, h) => {
			const { name = "Stranger" } = request.params;
			return `Hello, ${name}!`;
		}
	},
	{
		method: '*',
		path: '/{any*}',
		handler: (request, h) => {
			return "Halaman tidak ditemukan";
		},
	},
];

module.exports = routes;