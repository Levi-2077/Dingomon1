const express = require('express')

const app = express()


app.use(express.json())

app.get('/restaurants', (req,res)=>{

    res.send('fetch the restaurant data')

})


app.post('/order', (req,res)=>{
    res.send(`order placed sucessfully. order details ${JSON.stringify(req.body)}`)
})

app.listen(3000,()=>{
    console.log("server running http://localhost:3000")
})