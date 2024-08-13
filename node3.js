    const http=require('http');

     const routes=require('./node4')
     console.log(routes.someText);
    const server=http.createServer(routes.handler);

server.listen(3000); 