const short = async(req, res) => {
    // Grab the fullUrl parameter from the req.body
    const fullUrl = req.body.fullUrl
    console.log('URL requested: ', fullUrl)

    // insert and wait for the record to be inserted using the model
    const record = new ShortURL({
        full: fullUrl
    })

    await record.save()

    res.redirect('/')
}

module.exports = short;