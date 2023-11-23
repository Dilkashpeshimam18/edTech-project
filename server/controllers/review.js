const CourseReview = require('../models/reviewCourse')

exports.getAllReview = async (req, res) => {
    try {
        const courseId = req.params.courseId

        const courseReview = await CourseReview.find({
            courseId: courseId
        })

        res.status(200).json({ success: true, reviews: courseReview })

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })

    }
}

exports.postReview = async (req, res) => {
    try {
        const { name, email, review } = req.body
        const courseId = req.params.courseId
        const userId = req.user.id
        const user = req.user

        if (!user) {
            throw new Error("You need to be authenticated!")

        }

        const reviewCourse = new CourseReview({
            courseId,
            userId,
            name,
            email,
            review
        })

        await reviewCourse.save()

        res.status(200).json({ message: 'Added review successfully!' })

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })

    }
}