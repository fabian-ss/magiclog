export const customError = (err, res, next) => {
    console.log(err != null);
    res.status(500).json({
        status: "error",
        message: err.message
    })
}