const dao = require('../Lib/dao');

async function createConnection() {
  try {
    await dao.createConnection();
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createConnection,
};
