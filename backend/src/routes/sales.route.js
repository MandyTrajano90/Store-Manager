const route = require('express').Router();
const salesController = require('../controllers/sales.controller');

route.get('/', salesController.getAll);
route.get('/:id', salesController.findById);
route.post('/', salesController.createSale);

module.exports = route;
