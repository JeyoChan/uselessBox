const log4js = require('log4js');
const { LogConfig } = require('../config.json');

log4js.configure(LogConfig);

const logger = log4js.getLogger();
const errLogger = log4js.getLogger('err');

const UBLogger = {
  info (info) {
    logger.info(info);
  },
  error (apiInfo, err) {
    const result = {
      apiInfo,
      err
    };
    errLogger.error(result);
  }
};

module.exports = {
  UBLogger
};