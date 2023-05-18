import express from "express";
import connection from "./config/connectdb";
import route from "./routes/homeRoute";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const PORT = 3000

app.use('/', route)


app.get('/', (req, res) => {
    res.send('welcome')
})



// app.get('/home', (req, res) => {
//     res.send('home')
// })



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})