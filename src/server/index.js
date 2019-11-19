const express = require( 'express' )

const app = express()

const PORT = 5000

const HOST = "10.31.162.41"

const homeRouter  = require('./routes/home.js')

app.use('/',homeRouter)


app.listen( PORT,HOST,() => {
  console.log( `服务器运行在：http://${ HOST }:${ PORT}` )
})