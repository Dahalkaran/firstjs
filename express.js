const http=require('http');
const express=require('express');
const app=express();
app.use((req, res, next)=>{
    //executing after every incoming request
    console.log("in the middleware");
    next();
});
app.use((req, res, next)=>{
    //executing after every incoming request
    console.log("in another the middleware");
   res.send({ key1: 'value' }) 
  //res.send('<h1> hello to node js </h1>')
});
app.listen(3000)
//const server=http.createServer(app);
//server.listen(3000);