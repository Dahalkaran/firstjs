// // const fs = require('fs');
// // const path = require('path');

// // const p = path.join(
// //   path.dirname(process.mainModule.filename),
// //   'data',
// //   'products.json'
// // );
// const db=require('../util/database')
// // const getProductsFromFile = cb => {
// //   fs.readFile(p, (err, fileContent) => {
// //     if (err) {
// //       cb([]);
// //     } else {
// //       cb(JSON.parse(fileContent));
// //     }
// //   });
// // };

// module.exports = class Product {
//   constructor(id,title, imageUrl, description, price) {
//     this.id=id 
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
    
    
//     // getProductsFromFile(products => {
//     //   if(this.id){
//     //      const exiting=products.findIndex(prod => prod.id===this.id);
//     //      const updatedProducts=[...products];
//     //      if(exiting>=0){
//     //       updatedProducts[exiting]=this;
//     //      }
         
//     //      fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//     //       console.log(err);
//     //     });
//     //   }else{
//     //     this.id=Math.random().toString();
//     //     console.log(products)
//     //     products.push(this);
//     //     fs.writeFile(p, JSON.stringify(products), err => {
//     //       console.log(err);
//     //     });
//     //  }
      
//     // });
//     return db.execute('INSERT INTO `product` (`titel`, `price`, `description`, `image`) VALUES (?, ?, ?, ?)',
//       [this.title,this.price,this.description,this.imageUrl]
//     );
//   }

//   static fetchAll(cb) {
//     // //getProductsFromFile(cb);
//     // fs.readFile(p, (err, fileContent) => {
//     //   console.log(1);
//     //   if (err) {
//     //     cb([]);
//     //   } else {
//     //     cb(JSON.parse(fileContent));
//     //   }
//     // });
//     return db.execute('select * from product');
//   }
//   static findById(id,cb){
//     // getProductsFromFile(products => {
//     //   const product = products.find(p => p.id === id);
//     //   cb(product);
//     // });
//     return db.execute('select * from product where product.id=?',
//       [id] );
//   }
//  static deleteById(id){
//   //   getProductsFromFile(products => {
//   //     const updatedProducts = products.filter(prod => prod.id !== id); // Remove the product
//   //     fs.writeFile(p, JSON.stringify(updatedProducts), err => {
//   //         if (err) {
//   //             console.log(err);
//   //         }
//   //     });
//   // });
//   return db.execute('delete from product where product.id=?',
//     [id] );
// }
  
// };


const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Product=sequelize.define('product',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey: true
  },
  title:Sequelize.STRING,
  price:{
    type:Sequelize.DOUBLE,
    allowNull:false,
  },
  imageUrl:{
    type:Sequelize.STRING,
    allowNull:false,
  },
  description:{
    type:Sequelize.STRING,
    allowNull: false
  }
});
module.exports=Product;