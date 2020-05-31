function existBody(req, params) {
  if (!(req && req.body)) {
    return false;
  }
  if (typeof params == 'string') {
    return req.body.hasOwnProperty(params);
  }
  return params.reduce((result, param) => result && req.body.hasOwnProperty(param), true);
}

function existQuery(req, params) {
  if (!(req && req.query)) {
    return false;
  }
  if (typeof params == 'string') {
    return req.query.hasOwnProperty(params);
  }
  return params.reduce((result, param) => result && req.query.hasOwnProperty(param), true);
}

module.exports = {
  existBody,
  existQuery
};