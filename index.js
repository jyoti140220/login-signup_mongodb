const express=require('express')
const app=express()
app.use(express.json())
const db=require('./database/db.js')

app.use('/',require('./routers/route.js'))

app.listen(3050,()=>{
    console.log("server is running on port 3050.....");
})