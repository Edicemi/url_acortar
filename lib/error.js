const Error = (err, code) => {
    const error = {
        message: err,
        code: code
    }
    return error;
}

module.exports = Error;