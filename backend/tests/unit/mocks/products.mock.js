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

const newProductInsertIdFromDBSuccessful = { insertId: 4 };

const createdProductDB = {
  status: 'CREATED',
  data: newProductDB,
};

const createdProductService = {
  status: 'CREATED',
  data: newProductService,
};

const nameValidationMessage = {
  message: '"name" length must be at least 5 characters long',
};

const nameIsRequired = {
  message: '"name" is required',
};

const updatedProductDB = {
  id: 2,
  name: 'Capa do Batman',
};

const updatedProductService = {
  id: 2,
  name: 'Capa do Batman',
};

const updatedProductResult = {
  id: 2,
  name: 'ProdutoX',
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
  newProductInsertIdFromDBSuccessful,
  nameValidationMessage,
  updatedProductDB,
  updatedProductService,
  updatedProductResult,
  nameIsRequired,
};