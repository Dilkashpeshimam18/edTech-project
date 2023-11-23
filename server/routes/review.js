const express = require('express')
const reviewController = require('../controllers/review')
const { authenticate } = require('../middleware/auth')

const router = express.Router()

router.get('/get-allReview/:courseId', reviewController.getAllReview)
router.post('/post-review/:courseId', authenticate, reviewController.postReview)

module.exports = router