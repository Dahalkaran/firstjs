const http=require('http');
const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const adminRoutes=require('./routs/admin');
const shopRoutes=require('./routs/shop');
app.use(bodyParser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
});
app.listen(3000);
//const server=http.createServer(app);
//server.listen(3000);