const SignupModel = require('../models/signup');
const bcrypt = require('bcryptjs')






const signup = async (req, res) => {

    const findemail = await SignupModel.findOne({ email: req.body.email })
    if (findemail) {
        res.send({ message: 'please enter diff email, email alread registered' })
    } else {
        var hashPassword = await bcrypt.hash(req.body.password, 12)
        const newUserSgignUp = new SignupModel({
            email: req.body.email, password: hashPassword
        })
        newUserSgignUp.save()
            .then((response) => {
                res.status(200).send({ result: response, message: "Signed Up succesfully" })
            })
            .catch((error) => {
                res.status(400).send({ result: error.message, message: 'not signed up, error' })
            })
        //res.send({result:'',message: "signed in sucesfully"})
    }
}

//it will signup based on user already signedup
const signin = async (req, res) => {

    const findemail = await SignupModel.findOne({ email: req.body.email })
    if (findemail) {
        var comparePassword = await bcrypt.compare(req.body.password, findemail.password)
        if(comparePassword){
            res.status(200).send({message: 'Signed in Succesfully'})
        }else{
            res.status(404).send({message: 'your password is incorrct'})
        }
    } else{
        res.send({message: 'no user is registered with this email'})
    }
}

const getall = async(req, res)=>{
    const alldata = await SignupModel.find({})
    res.status(200).send({result: alldata, message: 'all mails fetched'})
}

module.exports = {signup, signin, getall}






// app.post('/signup', async (req, res) => {

//     const findemail = await SignupModel.findOne({ email: req.body.email })
//     if (findemail) {
//         res.send({ message: 'please enter diff email, email alread registered' })
//     } else {
//         var hashPassword = await bcrypt.hash(req.body.password, 12)
//         const newUserSgignUp = new SignupModel({
//             email: req.body.email, password: hashPassword
//         })
//         newUserSgignUp.save()
//             .then((response) => {
//                 res.status(200).send({ result: response, message: "Signed Up succesfully" })
//             })
//             .catch((error) => {
//                 res.status(400).send({ result: error.message, message: 'not signed up, error' })
//             })
//         //res.send({result:'',message: "signed in sucesfully"})
//     }
// })

// //it will signup based on user already signedup
// app.post('/signin', async (req, res) => {

//     const findemail = await SignupModel.findOne({ email: req.body.email })
//     if (findemail) {
//         var comparePassword = await bcrypt.compare(req.body.password, findemail.password)
//         if(comparePassword){
//             res.status(200).send({message: 'Signed in Succesfully'})
//         }else{
//             res.status(404).send({message: 'your password is incorrct'})
//         }
//     } else{
//         res.send({message: 'no user is registered with this email'})
//     }
// })
