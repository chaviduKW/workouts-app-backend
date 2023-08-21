require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

const app = express()
const port = process.env.PORT;

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/workouts', workoutRoutes)

app.get('/', (req, res) => {
    res.json({ msg: "welcome to the app" })
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`connected to db & listening on port ${port}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })