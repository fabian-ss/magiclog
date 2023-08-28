export const badrequest = (err, req, res, next) => {
    res.status(400).json({
        status: "error",
        message: err.message
    })
}

export const notFound = (req, res, next) => {
    res.status(404).json({
        status: "error",
        message: "something wrong or page doesnt exist"
    })
}

export const welcome = (req, res, next) => {
    res.status(200).json({'message':"MagicLog API"})
}