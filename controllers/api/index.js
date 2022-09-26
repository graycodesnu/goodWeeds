const router = require('express').Router();
const publicRoutes = require('./publicRoutes.js');

router.use('/', publicRoutes);

module.exports = router;
