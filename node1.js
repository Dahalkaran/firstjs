const http=require('http');
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    if (req.url === '/home') {
        res.write('<h1>Welcome home</h1>');
    } else if (req.url === '/about') {
        res.write('<h1>Welcome to About Us page</h1>');
    } else if (req.url === '/node') {
        res.write('<h1>Welcome to my Node Js project</h1>');
    } else {
        res.write('<h1>Hello from my Node.js Server!</h1>');
    }
    res.write('</html>');
    res.end();
})
server.listen(3000);