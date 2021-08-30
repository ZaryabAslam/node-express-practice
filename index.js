const express = require('express');
const app = express();
const https = require('https')
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;
const celcius= 'units=metric'


app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/submit', (req,res)=>{
    const city = req.body.city
    const API_KEY = '34174d5ed9074754a51bf62a23e170f6';
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&${celcius}`
    https.get(URL, response=>{
        response.on('data', (chunk) => {
          var weatherInfo = JSON.parse(chunk)
          var clouds = weatherInfo.weather[0].main
          var temp = weatherInfo.main.temp
          res.write(`<h1>The Weather is ${clouds} and the temp in ${city} is ${temp}</h1>`)
          res.send()
        });
      })
} )

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`)
})