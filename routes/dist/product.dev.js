"use strict";

var router = require('express').Router();

var ctrl = require('../controllers'); //routes


router.get('/', ctrl.product.index);
router.get('/:id', ctrl.product.show);
router.post('/', ctrl.product.create);
router.put('/:id', ctrl.product.update);
router["delete"]('/:id', ctrl.product.destroy);
module.exports = router;