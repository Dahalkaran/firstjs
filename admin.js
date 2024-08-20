const express=require('express');
const routs=express.Router();
routs.get('/add-product',(req, res, next)=>{
     
    res.send(`
        <form action="admin/add-product" method="POST">
          <input type="text" name="title">
          <input type="number" name="size">
          <button type="submit">Add-Product</button>
        </form>
      `);
});
routs.post('/add-product',(req, res, next)=>{
  console.log(req.body);
  res.redirect('/');
});


module.exports=routs;