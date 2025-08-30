//importante: Aprendi como criar um servidor
const http = require('http');

http.createServer((requisicao, resposta)=>{
    resposta.writeHead(200, {
        'Content-Type':'text/plain'
    });
    resposta.write('criei meu primeiro servidor  \n ele esta funcionando ')
    resposta.end();

}).listen(1337);