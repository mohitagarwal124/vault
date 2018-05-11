const daoBoot = require('./daoBoot');
const config = require('../Config');

logger = require('../Lib/logger');

function stopServer() {
  startServer.close(() => {
    setTimeout(() => {
      process.exit(1);
    }, config.SERVER_TIMEOUT);
  });
}

async function startInitialProcess() {
  try {
    logger.info('logger working');
    logger.log('logger working');
    await daoBoot.createConnection();
    logger.log(`BootStrapinng Done, Server running at port: ${config.PORT}`);
  } catch (error) {
    stopServer();
  }
}

process.on('message', (message) => {
  console.log(`Received signal : ${message}`);
  if (message === 'shutdown') {
    stopServer();
  }
});

process.on('SIGTERM', () => {
  console.log('Got SIGTERM. Graceful shutdown start', new Date());
  stopServer();
});

process.on('SIGINT', () => {
  console.log(' graceful shutdown express at ', new Date());
  stopServer();
});

module.exports = {
  startInitialProcess,
  stopServer,
};
