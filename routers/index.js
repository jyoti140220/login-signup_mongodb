const express=require('express')
const router=express.Router()

router.use('/',require('./signuproute.js'))
router.use('/',require('./loginroute.js'))
router.use('/',require('./userdataroute.js'))

module.exports=router

