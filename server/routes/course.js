const express = require('express')
const courseController = require('../controllers/courses')
const router = express.Router()

router.get('/get-allCourses', courseController.getAllCourse)
router.get('/get-courseDetail/:id', courseController.getCourseDetail)

module.exports = router