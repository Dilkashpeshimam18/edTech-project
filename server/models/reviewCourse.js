const mongoose = require('mongoose')

const courseReviewSchema = mongoose.Schema({
    courseId: {
        type: String,
        required: true,

    },
    userId: {
        type: String,
        required: true,
    },
    review: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    }

})

module.exports = mongoose.model('CourseReview', courseReviewSchema)