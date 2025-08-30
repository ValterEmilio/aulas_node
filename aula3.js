const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((req, res)=> {
    res.writeHead(200,{"content-type":"text/html"});
    if (req.url=='/'){
        res.write('<h1> Seja bem vindo!</h1>');
    } else if (req.url=='/blog'){
        res.write('<h1> blog do site</h1>')
    } else if (req.url=='/contato'){
        res.write('<h1> contatos da empresa </h1>')
    }
    res.end();
});

servidor.listen(porta, host, ()=>{console.log('servidor ativo')});