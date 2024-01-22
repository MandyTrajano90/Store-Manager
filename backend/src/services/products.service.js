const productsModel = require('../models/products.model');
const schema = require('../validations/validationsInputValues');

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
  const validation = schema.validateProduct({ name });
  if (validation) return { status: validation.status, data: { message: validation.message } };
  const newProduct = await productsModel.insertNewProduct(name);
  return { status: 'CREATED', data: newProduct };
};

const updateProduct = async (id, name) => {
  const validation = schema.validateProduct({ name });

  if (validation) return { status: validation.status, data: { message: validation.message } };
  const product = await productsModel.findById(id);

  if (!product) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };

  const updatedProduct = await productsModel.updateProduct(id, name);
  return { status: 'SUCCESS', data: updatedProduct };
};
module.exports = {
  getAll,
  findById,
  insertNewProduct,
  updateProduct,
};