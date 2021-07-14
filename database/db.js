const mongoose=require('mongoose');

var DB = 'mongodb+srv://jyoti:jyotibhandari@cluster0.ckuzv.mongodb.net/jyotiDB?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log("database connected.."))
    .catch((err) => console.log(err))











// const express = require('express')
// const bodyparser = require('body-parser')
// const mongoose = require('mongoose')
// var app = express()
// app.use(express.json())

// //create connection 
// var DB = 'mongodb+srv://jyoti:jyotibhandari@cluster0.ckuzv.mongodb.net/jyotiDB?retryWrites=true&w=majority'
// mongoose.connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// }).then(() => console.log("database connected.."))
//     .catch((err) => console.log(err))

// // to create schema
// const createSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     conformPassword: {
//         type: String,
//         required: true
//     }
// })
// //  to create collection
// const createCollection = new mongoose.model('jyoticollection', createSchema)


// app.get('/signup', (req, res) => {
//     var reqdata = req.body
//     // const createdocument = async () => {
//     //     try {
//     //         const document1 = new createCollection({
//     //             name: req.body.name,
//     //             password: req.body.password1,
//     //             conformPassword: req.body.password2
//     //         })

//     //         const result = await document1.save()
//     //         console.log(result);
//     //         const res = await createCollection.find({})
//     //         console.log(res);

//     //     } catch (err) {
//     //         console.log(err);
//     //     }

//     // }
//     createdocument()




// })



// app.listen(4055, () => console.log("SERVER RUNNING...."))
