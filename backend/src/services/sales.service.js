const salesModel = require('../models/sales.models');
const schema = require('../validations/validationsInputValues');

const getAll = async () => {
  const sales = await salesModel.getAll();
  return { status: 'SUCCESS', data: sales };
};

const findById = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (sale === undefined || sale.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  return { status: 'SUCCESS', data: sale };
};

const createSale = async (products) => {
  const errorValidation = schema.validateSale(products);
  if (errorValidation) {
    return { status: errorValidation.status, data: { message: errorValidation.message } };
  }
  const array = products.map(async (product) => {
    const id = product.productId;

    const productModel = await findById(id);

    if (productModel.status === 'NOT_FOUND') {
      throw new Error('Product not found');
    }
  });

  try {
    await Promise.all(array);
  } catch (error) {
    return { status: 'NOT_FOUND', data: { message: error.message } };
  }
  const sale = await salesModel.createSale(products);
  return { status: 'CREATED', data: sale };
};

const deleteSale = async (saleId) => {
  const sale = await salesModel.findById(saleId);
  if (sale === undefined || sale.length === 0) {
    return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  }
  await salesModel.deleteSale(saleId);
  return { status: 'NO_CONTENT', data: null };
};

module.exports = {
  getAll,
  findById,
  createSale,
  deleteSale,
};