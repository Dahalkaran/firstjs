const express=require('express');
const router=express.Router();
router.get('/shop',(req, res, next)=>{
    
    console.log("in another the middleware");
 
           res.send('<h1> hello to node js </h1>')
});
module.exports=router;