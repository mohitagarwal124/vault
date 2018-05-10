const dao = require('../Lib/dao');
const config = require('../Config');

async function saveKey(payload) {
  try {
    const model = config.MONGO_COLLECTION.VAULT_COLLECTION;
    const data = {};
    data.key = Object.keys(payload.json)[0];
    data.value = payload.json[data.key];
    data.timestamp = Date.now();
    await dao.insertData(model, data);
    return { key: data.key, value: data.value, timestamp: data.timestamp };
  } catch (error) {
    throw error;
  }
}

async function fetchKey(keyName, timestamp) {
  try {
    const model = config.MONGO_COLLECTION.VAULT_COLLECTION;
    const projection = {
      _id: 0,
    };
    const query = {
      key: keyName,
    };
    if (timestamp) {
      query.timestamp = { $lte: timestamp };
    }
    const options = {
      sort: {
        timestamp: -1,
      },
      limit: 1,
    };
    const data = await dao.fetchData(model, query, projection, options);
    if (data.length) {
      return { value: data[0].value };
    }
    return {};
  } catch (error) {
    throw error;
  }
}


module.exports = {
  saveKey,
  fetchKey,
};
