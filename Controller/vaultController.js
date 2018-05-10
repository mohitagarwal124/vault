const response = require('../Lib/response');
const services = require('../Services');

async function saveKey(req, res) {
  console.log('=======req.body===========', req.body);
  try {
    const result = await services.vaultService.saveKey(req.body);
    response.sendSuccess({ data: result }, res);
  } catch (error) {
    response.sendError(error, res);
  }
}

async function fetchKey(req, res) {
  console.log('=======req.params===========', req.params);
  try {
    const result = await services.vaultService.fetchKey(req.params.key, req.query.timestamp);
    response.sendSuccess({ data: result }, res);
  } catch (error) {
    response.sendError(error, res);
  }
}

module.exports = {
  saveKey,
  fetchKey,
};
