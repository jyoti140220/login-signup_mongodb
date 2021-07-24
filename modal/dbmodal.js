const mongoose=require('mongoose')

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})



const userschema = new mongoose.model('jyoticollection', user)

module.exports=userschema

