
exports.getUserDetail = (req, res) => {
    try {
        const user = req.user
        const userData = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        res.status(200).json({ success: true, user: userData })

    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: err })
    }
}