const db = require('../modal/dbmodal.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const jwttoken=require('../middleware/jwt');


const login = async (req, res) => {
    const data1 = await db.findOne({ email: req.body.email })
    if(data1){
        const comaparePassword = await bcrypt.compare(req.body.password, data1.password)
        if (comaparePassword) {
            const token=await jwttoken({ email: req.body.email },process.env.SECRET_KEY)
            console.log(token)
            return res.status(200).json({message: "You Have Logged Successfully!!!",status: 200,token: token})
        }else{
            return res.status(404).json({message: "Invalid Password",status: 404})
        }

    }else{
        return res.status(404).json({message: "Invalid Email-Id",status: 404})
    }
}

module.exports = login