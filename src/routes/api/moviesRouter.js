const router = require('express').Router()
const apiMoviesController = require('../../controllers/api/moviesController');

router.post('/api/movies', apiMoviesController.create),
router.delete('/api/movies/:id', apiMoviesController.destroy);

module.exports = router;