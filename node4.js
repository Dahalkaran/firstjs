    const http=require('http');
    const fs=require('fs')
    const requestHandler=(req,res)=>{
        const url=req.url;
        const method = req.method;

        if (url === '/') {
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write(`<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`);
            res.write('</html>');
           return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body=[];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
        })
       return req.on('end',()=>{
            const parsedbody=Buffer.concat(body).toString();
            console.log(parsedbody);
            const message=parsedbody.split('=')[1];
            fs.writeFile('message.txt',message,err=>{
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome home</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();
    };
   
//module.exports=requestHandler;
/*module.exports={
    handler: requestHandler,
    someText:'he is a good boy'
}*/
/*module.exports.handler=requestHandler;
module.exports.someText='some hard text';*/
exports.handler=requestHandler; 
exports.someText='some hard text';