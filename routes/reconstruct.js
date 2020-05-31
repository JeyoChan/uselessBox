const { Router } = require('restify-router');

const { existBody } = require('../utils/paramValidator');
const UBResult = require('../utils/UBResult');
const { UBLogger } = require('../utils/UBLogger');
const { rec } = require('../service/rec');

const router = new Router();

router.post('', (req, res, next) => {
  if (!existBody(req, 'initialText')) {
    res.send(new UBResult(false, '入参缺失'));
    return next();
  }
  const initialText = req.body.initialText;
  const initialType = req.body.initialType;
  const targetType = req.body.targetType;
  rec(initialText, initialType, targetType)
    .then((ret) => {
      res.send(new UBResult(true, ret));
      const logInfo = {
        ret,
        userInfo: {
          agent: req.rawHeaders[req.rawHeaders.indexOf('User-Agent') + 1],
          ip: req.connection.remoteAddress
        }
      };
      UBLogger.info(logInfo);
      return next();
    })
    .catch((err) => {
      UBLogger.error('reconstruct err', err);
      res.send(new UBResult(false, err));
      return next();
    });
});

module.exports = router;
