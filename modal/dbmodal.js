const mongoose=require('mongoose')
const bcrypt=require('bcrypt')


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



//  for hashing the password

user.pre('save',async function(next){
    try {
        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(this.password,salt)
        this.password=hashedpassword
        next()
    } catch (error) {
        next(err)
        
    }
})



const userschema = new mongoose.model('jyoticollection', user)

module.exports=userschema

