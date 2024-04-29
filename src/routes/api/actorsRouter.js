const router = require('express').Router()
const apiActorsController = require('../../controllers/api/actorsController');

router.get('/api/actors', apiActorsController.list);
router.get('/api/actors/:id', apiActorsController.detail);
router.post('/api/actors', apiActorsController.create)
router.delete('/api/actors/:id', apiActorsController.destroy)

module.exports = router;