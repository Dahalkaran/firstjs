const Product = require('../models/product');
const Cart=require('../models/cart');


exports.getProducts = (req, res, next) => {
  Product.fetchAll().then((  [rows,fildData])=>{
    res.render('shop/product-list', {
         prods: rows,
         pageTitle: 'All Products',
         path: '/products'
    })
  })
  
  .catch(err=>{
    console.log(err);
  });
};

exports.getProduct=(req,res,next)=>{
  const proId=req.params.productId;
  Product.findById(proId)
  .then(([product])=>{
    res.render('shop/product-detail',{
        product:product[0], 
        pageTitle: product.title,
        path:'/products'
        });
  })
  .catch(err=>console.log(err))
  //   product=>{
  //   console.log(product);
  //  res.render('shop/product-detail',{
  //     product:product, 
  //     pageTitle: product.title,
  //     path:'/products'
  //   });
  // });
 
}

exports.getIndex = (req, res, next) => {
  // Product.fetchAll(products => {
  //   res.render('shop/index', {
  //     prods: products,
  //     pageTitle: 'Shop',
  //     path: '/'
  //   });
  // });
  Product.fetchAll().then((  [rows,fildData])=>{
    res.render('shop/index', {
         prods: rows,
         pageTitle: 'Shop',
         path: '/'
    })
  })
  
  .catch(err=>{
    console.log(err);
  });
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart=(req,res,next)=>{
  const proId= req.body.productId;
  console.log(proId);
  Product.findById(proId,product=>{
      Cart.addProduct(proId,product.price);
  })
  res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};