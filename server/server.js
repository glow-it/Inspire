let express = require('express')
let dotenv = require("dotenv")
let cors = require("cors")

let app = express()

dotenv.config()
let env = process.env

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=> {
    res.status(200).send({message:"Hello from inspire."})
})



app.listen(8000,()=> console.log("Server started at http://localhost:8000"))