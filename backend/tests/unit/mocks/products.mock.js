const productsDB = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
];

const productsFromModel = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
];

const productDB = {
  id: 3,
  name: 'Escudo do Capitão América',
};

const productModel = {
  id: 3,
  name: 'Escudo do Capitão América',
};

const notAProductDB = {
  message: 'Product not found',
};

const notAProductModel = {
  message: 'Product not found',
};

const productsSuccessful = {
  status: 'SUCCESS',
  data: productsFromModel,
};

const productSuccessful = {
  status: 'SUCCESS',
  data: productModel,
};

const productUnsuccessful = {
  status: 'NOT_FOUND',
  data: notAProductModel,
};

const newProductDB = { id: 4, name: 'ProdutoX' };

const newProductService = { id: 4, name: 'ProdutoX' };

const createdProductDB = {
  status: 'CREATED',
  data: newProductDB,
};

const createdProductService = {
  status: 'CREATED',
  data: newProductService,
};

module.exports = {
  productsDB,
  productsFromModel,
  productDB,
  productModel,
  notAProductDB,
  notAProductModel,
  productsSuccessful,
  productSuccessful,
  productUnsuccessful,
  newProductDB,
  newProductService,
  createdProductDB,
  createdProductService,
};