const express=require('express')
const router=express.Router()

router.use('/signup',require('./signuproute.js'))
router.use('/login',require('./loginroute.js'))
router.use('/alluser',require('./userdataroute.js'))

module.exports=router

