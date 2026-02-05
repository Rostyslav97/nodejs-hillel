import express from 'express';
const router = express.Router();

import debugLogger from 'debug';
const debug = debugLogger('app:users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  debug('some info from users');
  res.send('respond with a resource');
});

export default router;
