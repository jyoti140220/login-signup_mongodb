const db = require('../modal/dbmodal.js')

const allSignedUser= async (req,res)=>{
    const allUserData=await db.find()
    if (allUserData.length==0){
        return res.status(404).json({
            message:"No Data Available!!!",
            status:404
        })
    }
    else{
        return res.status(200).json({
            message:"Got Data Succesfully!!!",
            status:200,
            data:allUserData
        })
    }
}
module.exports = allSignedUser