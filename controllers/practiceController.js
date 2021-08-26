const authModel = require('../models/authSchema')

const postit =  (req, res) => {
    //console.log(req.body.email)
    //getting data from frontend
    const userCreate = new authModel({
        name: req.body.name, age: req.body.age, email: req.body.email, password: req.body.password
    })
    //saving to database
    userCreate.save()
        .then((response) => {
            //console.log(response, 'response succes')
            res.status(200).send({ result: response, message: 'data saved succesfully' })
        })
        .catch((error) => {
            //console.log(error, 'error response')
            res.status(400).send({ result: error.message, message: "error whie saving to db" })
        })
}

module.exports = postit