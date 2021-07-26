const express=require('express')
const router=express.Router()

const login=require('../controllers/userdata.js')

router.get('/',login)

module.exports=router
