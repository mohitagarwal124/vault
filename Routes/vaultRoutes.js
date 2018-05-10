const router = require('express').Router();
const controller = require('../Controller');
const validator = require('../Lib/validator');

router.post('/object', validator.saveKey(), controller.vaultController.saveKey);
router.get('/object/:key', validator.fetchKey(), controller.vaultController.fetchKey);

module.exports = router;
