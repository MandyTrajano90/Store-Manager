const theDate = '2024-01-17T20:28:07.000Z';

const salesDB = [
  {
    saleId: 1,
    date: theDate,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: theDate,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: theDate,
    productId: 3,
    quantity: 15,
  },
];

const salesFromModel = [
  {
    saleId: 1,
    date: theDate,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: theDate,
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: theDate,
    productId: 3,
    quantity: 15,
  },
];

const saleFromDB = [
  {
    date: 'theDate',
    productId: 1,
    quantity: 5,
  },
];

const saleFromModel = [
  {
    date: 'theDate',
    productId: 1,
    quantity: 5,
  },
];

const anySaleMessageDB = {
  message: 'Sale not found',
};

const anySaleMessageModel = {
  message: 'Sale not found',
};

const salesSuccess = {
  status: 'SUCCESSFUL',
  data: salesFromModel,
};

const saleSuccess = {
  status: 'SUCCESSFUL',
  data: saleFromModel,
};

const saleUnsuccessful = {
  status: 'NOT_FOUND',
  data: anySaleMessageModel,
};

module.exports = {
  salesDB,
  salesFromModel,
  saleFromDB,
  saleFromModel,
  anySaleMessageDB,
  anySaleMessageModel,
  salesSuccess,
  saleSuccess,
  saleUnsuccessful,
};