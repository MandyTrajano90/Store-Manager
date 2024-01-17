const httpCodeMap = {
  SUCCESS: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  INVALID_VALUE: 422,
};

const mapStatusHTTP = (status) => httpCodeMap[status] || 500;

module.exports = mapStatusHTTP;