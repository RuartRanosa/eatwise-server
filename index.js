
const mysql = require('mysql');
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
// const webpack = require('webpack');

var app = express()
var ip = process.env.IP || '0.0.0.0';
var port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)


var Users = require('./Routers/router.js')

app.use('/home', Users)

app.listen(port, () => {
    console.log("Server is running on port: " + port)
})