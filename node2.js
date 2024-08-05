    const http=require('http');
    const fs=require('fs')
    const server=http.createServer((req,res)=>{
    const url=req.url
    const method=req.method;
    if (url === '/') {
        fs.readFile('message.txt', 'utf8', (err, data) => {
            const message = err ? 'undefined' : data;

            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><h1>${message}</h1><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
            res.end();
        });
        return ;
    }
    if(url === '/message' && method === 'POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
        req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
            console.log(parsedbody);
            const message=parsedbody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
        return;
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome home</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
})
server.listen(3000);