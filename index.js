const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const PORT = 555


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname +'/index.html')
    // console.log(__dirname +'/index.html')
})

app.post('/', (req,res)=>{
    var number1 = Number(req.body.number1)
    var number2 = Number(req.body.number2)
    var result = number1 + number2;
   
    console.log(req.body.number1, req.body.number2)
    res.send('th addiion of two numbers is ' + result)
})



app.listen(PORT, ()=>{
    console.log('server connected')
})