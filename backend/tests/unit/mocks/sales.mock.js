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

module.exports = {
  salesDB,
  salesFromModel,
  saleFromDB,
  saleFromModel,
};