const router = require('express').Router();
const homeRoutes = require('./mainRoutes')
const path = require('path');

router.use('/', homeRoutes);

module.exports = router;

