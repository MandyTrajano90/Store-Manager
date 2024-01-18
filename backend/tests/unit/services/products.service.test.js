const { expect } = require('chai');
const sinon = require('sinon');
const { productsService } = require('../../../src/services');
const { productsDB, productsFromModel, productDB, productModel, notAProductModel, createdProductDB, createdProductService } = require('../mocks/products.mock');
const productsModel = require('../../../src/models/products.model');

describe('Testa o service de produtos', function () {
  it('Retorna todos os produtos com status 200', async function () {
    sinon.stub(productsModel, 'getAll').resolves(productsDB);
    const serviceRes = await productsService.getAll();

    expect(serviceRes.status).to.equal('SUCCESS');
    expect(serviceRes.data).to.be.deep.equal(productsFromModel);
  });

  it('Retorna um produto pelo id com status 200', async function () {
    sinon.stub(productsModel, 'findById').resolves(productDB);
    const serviceRes = await productsService.findById(3);

    expect(serviceRes.status).to.equal('SUCCESS');
    expect(serviceRes.data).to.be.deep.equal(productModel);
  });

  it('Retorna uma mensagem de erro caso o produto não exista', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);
    const serviceRes = await productsService.findById(100);

    expect(serviceRes.status).to.equal('NOT_FOUND');
    expect(serviceRes.data).to.be.deep.equal(notAProductModel);
  });

  it('Cria um novo produto com status 201', async function () {
    sinon.stub(productsModel, 'insertNewProduct').resolves(createdProductDB);
    const serviceRes = await productsService.insertNewProduct('ProdutoX');

    expect(serviceRes.status).to.equal('CREATED');
    expect(serviceRes.data).to.be.deep.equal(createdProductService);
  });
    
  afterEach(function () {
    sinon.restore();
  });
});