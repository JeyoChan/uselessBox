const { Router } = require('restify-router');

const router = new Router();

router.add('/uselessBox/fyBuilder', require('./fyBuilder'));

module.exports = router;