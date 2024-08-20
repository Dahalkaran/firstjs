const http=require('http');
const express=require('express');
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-Product',(req, res, next)=>{
     
    res.send(`
        <form action="/product" method="POST">
          <input type="text" name="title">
          <input type="number" name="size">
          <button type="submit">Add-Product</button>
        </form>
      `);
});
app.post('/product',(req, res, next)=>{
  console.log(req.body);
  res.redirect('/');
});

app.use('/',(req, res, next)=>{
    
    console.log("in another the middleware");
 
           res.send('<h1> hello to node js </h1>')
});
app.listen(3000)
//const server=http.createServer(app);
//server.listen(3000);