const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();


const dotenv = require("dotenv")
dotenv.config();

const app = express()
const port = process.env.PORT||5000;

app.use(cors())
app.use(express.json())

// available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/contacts', require('./routes/contacts'))
app.listen(port, () => {
    console.log(`MemoVibe app listening on port ${port}`)
})
