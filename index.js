// to .env variable while server is running-importing dotenv

require('dotenv').config()
// importing express.js

const express=require('express')




// import cors

const cors=require('cors')
// create express server

const trserver=express()
// use cors
trserver.use(cors())

// parsing json data using server app

trserver.use(express.json())

// import router
const router=require('./Routes/routes')

// use router to server

trserver.use(router)

// import connection.js
require('./dbConnection/connection')

// import middleware
 const middleware=require('./Middlewares/userMiddleware')
trserver.use(middleware)

// port number configuration
const PORT=4000 || process.env.PORT

// serving upload files
trserver.use('/upload',express.static('./uploads'))

// to run server
trserver.listen(PORT,()=>{
    console.log(`server is started at ${PORT}`)
})

// resolve request to localhost:4000
trserver.get('/',(req,res)=>{
    res.send("<h1> server is running successfully!!!</h1>")
})

trserver.post('/',(req,res)=>{
    res.send("<h1>post request done successfully!!!</h1>")
})
