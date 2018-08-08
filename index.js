/*
  Tiny app that calculates the liquor cost from information from the front-end.
*/

'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Calculator = require('./controllers/REST/calculate')

var port = process.env.PORT || 8080; //8080 by default

app.use(bodyParser.json())

app.listen(port), () => console.log('Calculator is listening on port 3000!');

app.get('/', (req, res) => res.send('App is up'))
app.post('/api/calculate', Calculator.calculate)
