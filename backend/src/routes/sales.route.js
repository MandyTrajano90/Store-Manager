const route = require('express').Router();
const salesController = require('../controllers/sales.controller');

route.get('/', salesController.getAll);
route.get('/:id', salesController.findById);
route.post('/', salesController.createSale);
route.delete('/:id', salesController.deleteSale);

module.exports = route;
