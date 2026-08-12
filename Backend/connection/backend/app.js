const express = require('express')
const cors = require('cors')

const app = express()

//mmiddleware

app.use(express.json())
app.use(cors())

//example 1:
app.post('/login', (req,res)=>{

    const {name, email} = req.body                        //frontend
    console.log(name)

    //validation

    if(name && email){
        res.json({message: `welcome $name`})
    }else{
        res.status(400).json({message: `name and email are required`})
    }
})

app.get('/', (req,res)=>{
    res.json({
        message:'backend running'
    })
})

app.listen(3000, ()=>{
    console.log("server running on http://localhost:3000")
})