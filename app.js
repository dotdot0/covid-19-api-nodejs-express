const request = require('request')
const express = require('express')
const path = require('path')

const app = express()

const port = process.env.PORT || 8080

const file = path.join(__dirname, '/app')

app.use(express.static(file))

app.get('/', (req,res) => {
    res.sendFile('index.html')
})

app.get('/covid-19/country', (req, res) => {
    const countryName = req.query.country
    if(countryName){
        res.send('Hello Welcome To API')
    }
    else{
        res.send('Please provide the name of the country')
    }
})

app.get('/help', (req, res) => {
    res.send('Help Page!')
})

app.get('*', (req, res) => {
    res.send('404 Page Not Found')
})


app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
})
