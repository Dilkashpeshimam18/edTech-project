const express = require('express')
const courseController = require('../controllers/courses')
const {authenticate} = require('../middleware/auth')

const router = express.Router()

router.get('/get-allCourses', courseController.getAllCourse)
router.get('/allCourses',courseController.allCourses)
router.get('/search-courses',courseController.searchCourses)
router.get('/filter-courses',courseController.filterCourses)
router.get('/get-courseDetail/:id', courseController.getCourseDetail)
router.get('/get-enrolled-course',authenticate,courseController.getEnrolledCourse)
router.put('/enroll-inCourse/:courseId', authenticate, courseController.enrollInCourse)
router.put('/mark-course-complete/:courseId',authenticate,courseController.markCourseComplete)

module.exports = router