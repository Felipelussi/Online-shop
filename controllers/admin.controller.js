import Product from "../models/product.model.js";

async function getProducts(req, res, next) {
  try {
    const products = await Product.findAll();
    res.render("admin/products/all-products", { products: products });
  } catch (error) {
    next(error);
  }
}

function getNewProduct(req, res) {
  res.render("admin/products/new-product");
}

async function createNewProduct(req, res) {
  const product = new Product({
    ...req.body,
    image: req.file.filename,
  });

  try {
    await product.save();
  } catch (error) {
    next(error);
    return;
  }
  res.redirect("products");
}

async function getUpdatedProduct(req, res, next) {
  try {
    console.log(req.params.id);

    const product = await Product.findById(req.params.id);

    console.log(product);

    res.render("admin/products/update-product", { product: product });
  } catch (error) {
    next(error);
  }
}

async function updateProduct(req, res, next) {
  const product = new Product({
    ...req.body,
    _id: req.params.id,
  });

  if (req.file) {
    product.replaceImage(req.file.filename);
  }
  
  try {
    await product.save();
  } catch (error) {
    next(error);
    return;
  }
  res.redirect('/admin/products')
}

export default {
  getNewProduct: getNewProduct,
  getProducts: getProducts,
  createNewProduct: createNewProduct,
  getUpdatedProduct: getUpdatedProduct,
  updateProduct: updateProduct,
};
