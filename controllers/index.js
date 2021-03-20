const router = require('express').Router();
const homeRoutes = require('./home-routes');

const apiRoutes = require('./api');

router.use('/',homeRoutes);
router.use('/api', apiRoutes);

//Response if none of those exist
router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;