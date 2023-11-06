const courseData = require('../data/courses')

exports.getAllCourse = (req, res) => {
    try {
        res.status(200).json({ success: true, courseData })

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