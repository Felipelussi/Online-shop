import Product from "../models/product.model.js"



function getCart(req, res){
  res.render('customer/cart/cart');
}


async function addCartItem(req, res) {
  let product;
  try{
   
   product = await Product.findById(req.body.productId);

  

  }catch(error){
    next(error);
    return;
  }
  
 const cart = res.locals.cart;
 
 cart.addItem(product);
 req.session.cart = cart;
 

 res.status(201).json({
    message: 'Cart updated',
    newTotalItems: cart.totalQuantity
 });

}

export default {
  addCartItem: addCartItem,
  getCart: getCart
};
