const { expect } = require('chai');
const sinon = require('sinon');
const chai = require('chai');
const sinonChai = require('sinon-chai');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { productsDB, productsFromModel, productDB, productModel, notAProductDB, notAProductModel, newProductDB, updatedProductDB, updatedProductService, newProductInsertIdFromDBSuccessful } = require('../mocks/products.mock');

chai.use(sinonChai);

describe('Testa o model de produtos', function () {
  it('Retorna todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([productsDB]);
    const products = await productsModel.getAll();

    expect(products).to.be.an('array');
    expect(products).to.be.deep.equal(productsFromModel);
  });
  it('Retorna um produto pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[productDB]]);
    const product = await productsModel.findById(3);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productModel);
  });
  it('Retorna um erro caso o produto não exista', async function () {
    sinon.stub(connection, 'execute').resolves([[notAProductDB]]);
    const product = await productsModel.findById(100);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(notAProductModel);
  });
  it('Insere um novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([newProductInsertIdFromDBSuccessful]);
    const product = await productsModel.insertNewProduct('ProdutoX');

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(newProductDB);
  });
  it('Atualiza um produto', async function () {
    sinon.stub(connection, 'execute').resolves([updatedProductDB]);
    const product = await productsModel.updateProduct(2, 'Capa do Batman');

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(updatedProductService);
  });
  it('Deleta um produto', async function () {
    const executeStub = sinon.stub(connection, 'execute').resolves(undefined);
    await productsModel.deleteProduct(3);
    sinon.assert.calledOnce(executeStub);
    expect(executeStub.called).to.equal(true);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});