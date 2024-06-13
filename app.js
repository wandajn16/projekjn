const express = require('express')
const router = require('./routes/notes')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use('/api', router)



app.listen(
    process.env.APP_PORT, () => {   
        console.log('Server berjalan di port: ' + process.env.APP_PORT)
        }
    )