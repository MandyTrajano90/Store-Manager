const route = require('express').Router();
const { productsController } = require('../controllers');

route.get('/', productsController.getAll);
route.get('/:id', productsController.findById);
route.post('/', productsController.insertNewProduct);
route.put('/:id', productsController.updateProduct);

module.exports = route;