const url = require('url');

const myURL = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso#pdf'

const parseUrl = new url.URL(myURL)
console.log(parseUrl.href)
console.log(parseUrl.hash)
console.log(parseUrl.pathname.at)
