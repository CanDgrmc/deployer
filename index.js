"use strict"

const config = require('./config')
const app = require('./lib/createApp')({config})

app.run().catch((e) => {
    console.log(e)
})
