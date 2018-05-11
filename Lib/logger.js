const fs = require('fs');
const winston = require('winston');
require('winston-daily-rotate-file');
const config = require('../Config');

if (!fs.existsSync(config.LOG_DIR)) {
    fs.mkdirSync(config.LOG_DIR);
}


const transports = [];
transports.push(
    new (winston.transports.DailyRotateFile)({
        name: 'Info File',
        filename: `${config.LOG_DIR}/-info.log`,
        datePattern: 'YYYY-MM-DD',
        prepend: true,
        level: 'info',
    }),
    new (winston.transports.DailyRotateFile)({
        name: 'Error File',
        filename: `${config.LOG_DIR}/-error.log`,
        datePattern: 'YYYYY-MM-DD',
        prepend: true,
        level: 'error',
    }),
);

module.exports = new (winston.Logger)({
    transports,
});

