import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { shiftRouter } from './routes/shift';
require('dotenv').config()

const app = express()

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})
app.use(json())

mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, () => {
    console.log('connected to database')
})

/**
 * Register SHIFT Router to index.ts
 */
app.use(shiftRouter)


app.listen(9000, () => {
    console.log('server is listening on port 9000')
})