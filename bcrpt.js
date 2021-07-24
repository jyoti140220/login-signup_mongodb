const bcrypt=require('bcrypt')

let input='dog'

let saltRounds=8

bcrypt.hash(input,saltRounds,(err,hash)=>{
    console.log(hash)
})
