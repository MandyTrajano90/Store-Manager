const chai = require('chai');

const { expect } = chai;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { productsService } = require('../../../src/services');

const { productsFromModel, productsSuccessful, productModel, productSuccessful, notAProductModel, productUnsuccessful, createdProductDB, newProductService, nameIsRequired, nameValidationMessage } = require('../mocks/products.mock');

chai.use(sinonChai);

const productsController = require('../../../src/controllers/products.controller');

describe('Testa o controller de produtos', function () {
  it('Retorna a lista dos produtos com status 200', async function () {
    const req = {
      params: {},
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(productsService, 'getAll').resolves(productsSuccessful);

    await productsController.getAll(req, res, next);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsFromModel);
  });

  it('Retorna um produto com status 200', async function () {
    const req = {
      params: { id: 1 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(productsService, 'findById').resolves(productSuccessful);

    await productsController.findById(req, res, next);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productModel);
  });

  it('Retorna um erro caso o produto não exista', async function () {
    const req = {
      params: { id: 100 },
      body: {},
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(productsService, 'findById').resolves(productUnsuccessful);

    await productsController.findById(req, res, next);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(notAProductModel);
  });

  it('Cria um novo produto com status 201', async function () {
    const req = {
      params: { },
      body: { name: 'ProdutoX' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(productsService, 'insertNewProduct').resolves(createdProductDB);

    await productsController.insertNewProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProductService);
  });

  it('Faz um update em um produto com status 200', async function () {
    const req = {
      params: { id: 2 },
      body: { name: 'ProdutoX' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    sinon.stub(productsService, 'updateProduct').resolves(productSuccessful);

    await productsController.updateProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productModel);
  });
  it('Retorna um erro caso o nome do produto não seja informado', async function () {
    const req = {
      params: { },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await productsController.insertNewProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith(nameIsRequired);
  });

  it('Retorna um erro caso o nome do produto seja menor que 5 caracteres', async function () {
    const req = {
      params: { },
      body: { name: 'Prod' },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const next = sinon.stub();

    await productsController.insertNewProduct(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(nameValidationMessage);
  });

  it('Deleta um produto com status 204', async function () {
    sinon.stub(productsService, 'deleteProduct').resolves({ status: 'NO_CONTENT', data: null });

    sinon.stub(productsService, 'findById').resolves({ id: 2, name: 'Traje de encolhimento' });
    const req = {
      params: { id: 2 },
      body: { },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith(null);
  });
  afterEach(function () {
    sinon.restore();
  });
});
