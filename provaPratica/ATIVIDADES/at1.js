const http = require('http');

const objeto = [
    {id : 1, nome: 'carlos'},
    {id : 2, nome: 'bruno'},
    {id : 3, nome: 'letícia'},
]
const json = JSON.stringify(objeto)
console.log(json)
