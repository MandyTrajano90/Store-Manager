const connection = require('./connection');

const getAll = async () => {
  const [sales] = await connection.execute(`
  SELECT 
    sale_id "saleId",
    date, 
    product_id "productId", 
    quantity 
  FROM sales 
  INNER JOIN 
    sales_products ON id = sale_id`);
  return sales;
};

const findById = async (saleId) => {
  const [sale] = await connection.execute(`
  SELECT
    date,
    product_id "productId",
    quantity
  FROM sales
  INNER JOIN
    sales_products ON id = sale_id
  WHERE id = ?
  `, [saleId]);
  return sale;
};

const createSale = async (products) => {
  // const [{ productId, quantity }] = product;
  const [sale] = await connection.execute(`
  INSERT INTO sales (date) VALUES (NOW())`);
  const saleId = sale.insertId;
  const array = products.map(async (product) => {
    const { productId, quantity } = product;
    await connection.execute(`
    INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?)`, [saleId, productId, quantity]); 
  }); 
  await Promise.all(array);
  return { 
    id: saleId,
    itemsSold: products,
  };
};

module.exports = {
  getAll,
  findById,
  createSale,
};