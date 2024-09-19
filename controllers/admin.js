const { where } = require('sequelize');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  // const product = new Product(null,title, imageUrl, description, price);
  // product.save()
  // .then(()=>{
  //   res.redirect('/');
  // })
  // .catch(err=>{
  //   console.log(err);
  // });
  Product.create({
    title: title,
    price:price,
    imageUrl:imageUrl,
    description:description
  }).then(result=>{
    console.log(result);
    res.redirect('/admin/products')
  }).catch(err=>{
    console.log(err);
  });
  
};

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/')
  }
  const prodId=req.params.productId;
  Product.findByPk(prodId)
  .then(product=>{
 if(!product){
  return res.redirect('/');
 }
  res.render('admin/edit-product', {
    pageTitle: 'Edit Product',
    path: '/admin/edit-product',
    editing: editMode,
    product:product
  });
})
.catch(err=>{console.log(err)});
};

exports.getProducts = (req, res, next) => {
  Product.findAll({})
  .then(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    })
  }).catch(err=>{
    console.log(err);
  })
};
exports.postEditProduct=(req,res,nex)=>{
   const prodId=req.body.productId;
   const updateTitle= req.body.title;
   const updatedPrice=req.body.price;
   const updatedUrl=req.body.imageUrl;
   const updatedDes=req.body.description;


   Product.findByPk(prodId)
   .then(product=>{
    product.title=updateTitle;
    product.price=updatedPrice;
    product.description=updatedDes;
    product.imageUrl=updatedUrl;
      return product.save();
   })
   .then(result=>{
    console.log(result);
    res.redirect('/admin/products');
   })
   .catch(err=>{console.log(err)})

  //  const updatedProduct = new Product(prodId, updateTitle, updatedUrl, updatedDes, updatedPrice);
  // updatedProduct.save();
  
}
exports.postDeleteProduct=(req,res,next)=>{
  const prodId=req.params.productId;
  Product.findByPk(prodId)
  .then(product=>{
     return product.destroy();
    
  })
  .then(result=>{
    res.redirect('/admin/products');
  })
  .catch(err=>{
    console.log(err);
  });
 
}