// Filename: 0416-routes.js
// Course: Dicoding- Back End Basics
// Description: Module 0416 Membangun Web Service menggunakan Node.js- Query parameter or querystrings
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
			const { lang } = request.query;
			if(lang === 'id') {
				return `Hai, ${name}!`;
			} else {
				return `Hello, ${name}!`;
			}
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