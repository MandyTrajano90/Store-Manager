const productsModel = require('../models/products.model');

const getAll = async () => { 
  const products = await productsModel.getAll();
  return { status: 'SUCCESS', data: products };
};

const findById = async (productId) => { 
  const product = await productsModel.findById(productId);
  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESS', data: product };
};

const insertNewProduct = async (name) => { 
  const newProduct = await productsModel.insertNewProduct(name);
  return { status: 'CREATED', data: newProduct };
};
module.exports = {
  getAll,
  findById,
  insertNewProduct,
};