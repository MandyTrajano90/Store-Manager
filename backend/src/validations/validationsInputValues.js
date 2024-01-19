const { productSchema, saleSchema } = require('./schemas');

const validateProduct = (object) => {
  const { error } = productSchema.validate(object);
  if (error) {
    return { status: error.message.includes('characters')
      ? 'INVALID_VALUE' : 'BAD_REQUEST',
    message: error.message };
  }
};

const validateSale = (object) => {
  const { error } = saleSchema.validate(object);
  if (error) {
    return { status: error.message.includes('required')
      ? 'BAD_REQUEST' : 'INVALID_VALUE',
    message: error.message };
  }
};
module.exports = {
  validateProduct,
  validateSale,
};
