const courseData = require('../data/courses')
const EnrolledCourse = require('../models/enrolledCourse')

exports.getAllCourse = async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1;
        const rowPerPage = parseInt(req.query.rowPerPage) || 10;

        const startIndex = (page - 1) * rowPerPage;
        const endIndex = startIndex + rowPerPage;

        const coursesForPage = courseData.slice(startIndex, endIndex);

        const totalCourses = courseData.length;
        const totalPages = Math.ceil(totalCourses / rowPerPage);

        return res.status(200).json({
            courses: coursesForPage,
            currentPage: page,
            totalPages: totalPages,
        });

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })

    }
}

exports.getCourseDetail = async (req, res) => {
    try {

        const id = req.params.id
        const course = courseData.find(course => course.id == id)
        if (course) {
            res.status(200).json({ success: true, course })
        } else {
            res.status(404).json({ success: false, error: 'Course not found' });
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })

    }
}

exports.searchCourses = (req, res) => {
    try {

        const { query } = req.query;

        if (!query) {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const results = courseData.filter(course => {
            return (
                course.name.toLowerCase().includes(query.toLowerCase()) ||
                course.instructor.toLowerCase().includes(query.toLowerCase()) ||
                course.description.toLowerCase().includes(query.toLowerCase())

            );
        });

        res.status(200).json(results);

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}

exports.filterCourses = (req, res) => {
    try {

        res.status(200).json(courseData)

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}

exports.allCourses = (req, res) => {
    try {
        let courses = courseData
        res.status(200).json({ success: true, courses })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })

    }
}
exports.enrollInCourse = async (req, res) => {
    try {
        const courseId = req.params.courseId
        const user = req.user
        const userId = req.user._id


        const studentData = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        const enrollCourse = new EnrolledCourse({
            courseId: courseId,
            userId: userId,

        })

        await enrollCourse.save()
        const course = courseData.find(course => course.id == courseId)
        if (course) {
            course.students.push(studentData)

        } else {
            throw new Error('Course not found')
        }
        res.status(200).json({ success: true, message: 'Successfully enrolled in course' })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })

    }
}

exports.getEnrolledCourse = async (req, res) => {
    try {
        const userId = req.user._id

        const enrolledDetail = await EnrolledCourse.find({ userId: userId })

        const enrolledCourses = enrolledDetail.map(enrollment => {
            const course = courseData.find(course => course.id === parseInt(enrollment.courseId));
            return course;
        });

        res.status(200).json({ success: true, enrolledCourses, enrolledDetail })

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })

    }
}
exports.markCourseComplete = async (req, res) => {
    try {
        const userId = req.user._id
        const courseId = req.params.courseId

        const course = await EnrolledCourse.findOne({
            userId: userId,
            courseId: courseId
        });

        if (course) {
            course.isCompleted = true
            await course.save()
        } else {
            throw new Error('Something went wrong!')
        }

        res.status(200).json({ success: true, message: 'Successfully marked course as completed!' })

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}
exports.isCourseComplete = async (req, res) => {
    try {
        const userId = req.user._id
        const courseId = req.params.courseId

        const course = await EnrolledCourse.findOne({
            userId: userId,
            courseId: courseId
        });

        if (course) {
            return res.status(200).json({ success: true, isCompleted: course.isCompleted })

        } else {
           return res.status(404).json({ success: false, error: 'Course not found' });
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}
