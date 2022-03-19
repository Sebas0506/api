var clientController=require('../controllers/clientController');
var router = require('express').Router()
router.get('/', function(req, res) {
  
    clientController.list(req,res);
})
router.get('/:id', function(req, res) {
  
    clientController.find(req,res);
})
router.post('/', function(req, res) {
  
    clientController.create(req,res);
})
//url:puerto/api/clientes
module.exports = router