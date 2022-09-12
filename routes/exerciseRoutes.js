const express = require("express");
const router = express.Router();
const exerciseController = require('../controllers/exerciseController')

router.get('/', exerciseController.getExercise)
router.put('/markFavorite', exerciseController.markFavorite )
router.get('/favorites', exerciseController.favoritesPage)
router.get('/completed', exerciseController.completedPage)

module.exports = router


