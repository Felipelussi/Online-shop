function getProducts(req,res){

    res.render('admin/products/all-products');

}

function getNewProduct(req, res){

    res.render('admin/products/new-product')

}

function createNewProduct(){

    console.log(req.body);
    console.log(req.file);

    res.redirect('admin/products')

}

export default {
    getNewProduct: getNewProduct,
    getProducts: getProducts,
    createNewProduct: createNewProduct
}