const Product = require('../models/product');
const Cart=require('../models/cart');


exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(products=>{
    res.render('shop/product-list',{
      prods:products,
      pageTitle:'All Products',
      path:'/products'
    })
  })
  .catch(err=>{
         console.log(err);
      });
};

exports.getProduct=(req,res,next)=>{
  const proId=req.params.productId;
  console.log(proId);
  Product.findAll({where:{id:proId}})
  .then(product=>{
       //console.log(product);
       res.render('shop/product-detail',{
        product:product[0],
        pageTitle: product[0].title,   
          path:'/products'
          });
      })
  .catch(err=>{
    console.log(err);
  })
  //  Product.findByPk(proId)
  // .then(product=>{
  //   //console.log(product);
  //    res.render('shop/product-detail',{
  //     pageTitle: product.title,  
  //     product:product, 
  //       path:'/products'
  //       });
  //  })
  //  .catch(err=>console.log(err));
     //product=>{
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
  Product.findAll({})
  .then(products=>{
    res.render('shop/index',{
      prods:products,
      pageTitle:'Shop',
      path:'/'
    })
  })
  .catch(err=>{
         console.log(err);
      });
}
  
//   Product.fetchAll()
  
//   .then((  [rows,fildData])=>{
//     res.render('shop/index', {
//          prods: rows,
//          pageTitle: 'Shop',
//          path: '/'
//     })
//   })
  
//   .catch(err=>{
//     console.log(err);
//   });
// };

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

exports.postCart=(req,res,next)=>{
  // const proId= req.body.productId;
  // console.log(proId);
  // Product.findById(proId,product=>{
  //     Cart.addProduct(proId,product.price);
  // })
  // res.redirect('/cart');
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
