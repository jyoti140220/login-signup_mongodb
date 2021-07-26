const express=require('express')
const router=express.Router()
const signup=require('../controllers/signup.js')

router.get('/',signup)

module.exports=router
