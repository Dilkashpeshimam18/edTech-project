const mongoose = require('mongoose')

const enrolledCourseSchema = mongoose.Schema({
    courseId: {
        type: String,
        required: true,

    },
    userId: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('EnrolledCourse', enrolledCourseSchema)