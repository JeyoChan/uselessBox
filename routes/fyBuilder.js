const { Router } = require('restify-router');
const fs = require('fs');

const { existBody } = require('../util/paramValidator');
const UBResult = require('../util/UBResult');
const { curType, FYTransForm } = require('../service/fyTransform');

const router = new Router();

router.post('/transform', (req, res, next) => {
  if (!existBody(req, ['finalType', 'initialSentence'])) {
    console.log(req.body);
    console.log(req.body.finalType, req.body.initialSentence);
    res.send(new UBResult(false, '入参缺失'));
    return next();
  }
  const { finalType, initialSentence } = req.body;
  if (curType.includes(finalType) == false) {
    res.send(new UBResult(false, '当前尚未完善此种语言的生成功能'));
    return next();
  }
  const fyTransForm = new FYTransForm(finalType);
  const finalSentence = fyTransForm.bjhTransform(initialSentence);
  res.send(new UBResult(true, finalSentence));
  return next();
});

router.get('', (req, res, next) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  const stream = fs.createReadStream('./src/bjh.html', 'utf-8');
  stream.pipe(res);
  // fs.readFile('./src/bjh.html', 'utf-8', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   console.log(data);
  //   res.send(new UBResult(true, data.toString()));
    return next();
  // });
});

module.exports = router;
