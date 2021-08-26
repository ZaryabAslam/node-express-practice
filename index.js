const express = require('express')
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors')
const mongoose = require('mongoose');
const authModel = require('./models/authSchema')
const SignupModel = require('./models/signup');
const bcrypt = require('bcryptjs');
const mainRoute = require('./route/mainRoute')
const PORT = 8080;

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://admin:passwordpassword@cluster0.ajxov.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
app.use(mainRoute)

mongoose.connection.on('connected', () => {
    console.log('mongodb connected to node')
})
mongoose.connection.on('error', () => {
    console.log('mongodb not connected to node')
})

app.get('/', (req, res) => {
    res.send('hello world')
})


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`)
})