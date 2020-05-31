const { Router } = require('restify-router');

const router = new Router();

router.add('/uselessBox/fyBuilder', require('./fyBuilder'));
router.add('/uselessBox/reconstruct', require('./reconstruct'));

module.exports = router;