const errorHandler = (err, req, res, next) => {
    console.log(err)
    if (err.name ==='MongoServerError') {
        //unique => err.code === 11000
        res.status(400).json({
            message: "Email must be unique"
        })
    } else if (err.name === 'ValidationError') {
        if (err.message.match(/Email can't be emptied/)) {
            res.status(400).json({
                message: "Email can't be emptied"
            })
        } else if (err.message.match(/Password can't be emptied/)) {
            res.status(400).json({
                message: "Password can't be emptied"
            })
        } else if (err.message.match(/Not in email form/)) {
            res.status(400).json({
                message: "Email is not in email form"
            })
        } else if (err.errors.status.message === 'Status is not available') {
            res.status(400).json({
                message: "Status is not available"
            })
        } else if (err.errors.status.message === 'Role is not available') {
            res.status(400).json({
                message: "Role is not available"
            })
        }
    } else if (err.name === "Email exceed 25 chars") {
        res.status(400).json({
            message: "Email can't be exceed 25 chars"
        })
    } else if (err.name === "Password not up to 8 chars") {
        res.status(400).json({
            message: "Password must be 8 chars minimum"
        })
    } else if (err.name === 'Emptied Firstname or lastname') {
        res.status(400).json({
            message: "Firstname or lastname can't be emptied"
        })
    } else if (err.name === 'Emptied company name') {
        res.status(400).json({
            message: "Company name can't be emptied"
        })
    } else {
        res.status(500).json({
            message: "Internal Server Error"
        })
    }
}

module.exports = errorHandler