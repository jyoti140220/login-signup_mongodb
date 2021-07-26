const db = require('../modal/dbmodal.js')
const joi=require('@hapi/joi')
const bcrypt=require('bcrypt')

const signup = async (req, res) => {
    var reqdata = req.body
    // for joi validation
    const authschema=joi.object({
        name:joi.string().min(3).max(10).required(),
        password:joi.string().required(),
        email:joi.string().email().lowercase().required(),
    
    })
    const result=authschema.validate(reqdata)
    if(result.error){
        return res.status(400).send(result.error.details[0].message)
    }else{
        console.log("data validate")
    }
    try {  
        const userExits=await db.findOne({email:reqdata.email})
        if (userExits){
            return res.status(208).json({
                message:"Email Is Already Exists",
                status:208
            })
        }else{
            const document = new db({name: req.body.name,password: req.body.password,email: req.body.email})
            const salt = await bcrypt.genSalt(10);
            document.password = await bcrypt.hash(document.password, salt);
            const result = await document.save()
            return res.status(200).json({
                message:"You Have Signup Succesfully!!",
                status:200
            })
        }
    } catch (err) {
        return res.status(400).send(err)
         
    }
}
module.exports=signup
