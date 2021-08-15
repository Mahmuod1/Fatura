const express= require('express')

const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT|| 5000
const admin = require('./routes/admin')
const user = require('./routes/user')
const newSletterContent = require('./routes/newSletterContent')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/admin',admin)
app.use('/user',user)
app.use('/content',newSletterContent)
const URI='mongodb://fatura:fatura@cluster0-shard-00-00.fpaxp.mongodb.net:27017,cluster0-shard-00-01.fpaxp.mongodb.net:27017,cluster0-shard-00-02.fpaxp.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-b5idj5-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(URI,{ 
    useNewUrlParser: true
    ,useUnifiedTopology: true ,
    createIndexes:true
     }).then(()=>{
        app.listen(PORT,()=>{
            console.log(`app is running in port ${PORT}`)
        })


    }).catch(error=>{
        console.log(error)
    })


