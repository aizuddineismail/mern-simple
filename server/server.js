import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
})


app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }

    console.info('Server started on port %s.', config.port)
})


// NEXXT TIME
// import express from 'express'
// // import devBundle from './devBundle';
// import path from 'path'
// import template from './../template'
// import { MongoClient } from 'mongodb'

// const app = express()
// // devBundle.compile(app)

// const CURRENT_WORKING_DIR = process.cwd()
// app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// app.get('/', (req, res) => {
//     res.status(200).send(template())
// })

// let port = process.env.PORT || 3000
// app.listen(port, function onStart(err) {
//     if (err) {
//         console.log(err)
//     }

//     console.info('Server started on port %s.', port)
// })

// const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-simple-setup'
// MongoClient.connect(url, (err, db) => {
//     console.log("Connected successfully to mongodb server") 
//     db.close()
// })