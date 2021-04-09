var express = require('express');
var router = express.Router();

const user = require('../controllers/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Hello Node");
});


router.get('/api/user/add', user.addUser);

router.get('/api/user/findByName', user.findByName);

router.get('/api/user/updateAge', user.updateAge);

router.get('/api/user/deleteOneById', user.deleteOneById);

router.get('/api/user/findAll', user.findAll);

module.exports = router;
