import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { shiftRouter } from './routes/shift'

const app = express()
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})
app.use(json())

/**
 * Register SHIFT Router to index.ts
 */
app.use(shiftRouter)

mongoose.connect('mongodb://localhost:27017/api', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology:true
}, () => {
        console.log('connected to database')
})

app.listen(9000, () => {
    console.log('server is listening on port 9000')
})