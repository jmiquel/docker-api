var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    const users = [
        'Richard Oliver',
        'James Ross',
        'Samson Muhangi',
        'Thomas Vranckx'
    ];
  res.send({ users });
});

module.exports = router;
