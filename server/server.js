const express = require('express')
const app = express()
const webRoutes = require('./routes/web.js')
const pug = require('pug')
const path = require('path')
require('dotenv').config()

app.use(express.static('client/public'))
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '../client/src/views'))

app.use(webRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on http://www.localhost:3000/ to stop server press control+c ' + process.env.DB_USERNAME)
})
