const { productSchema } = require('./schemas');

const validateProduct = (object) => {
  const { error } = productSchema.validate(object);
  if (error) {
    return { status: error.message.includes('characters')
      ? 'INVALID_VALUE' : 'BAD_REQUEST',
    message: error.message };
  }
};

module.exports = {
  validateProduct,
};
