const errorHandler = (err, req, res, next) => {
    console.log("Sudah Sampai Sini");
    console.log(err.message);
}

module.exports = errorHandler