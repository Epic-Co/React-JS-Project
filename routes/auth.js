const router=require('express').Router();
let User=require('../models/user.model');
const bcrypt=require('bcrypt');
const config=require('config');
const jwt=require('jsonwebtoken');
const auth=require('../middleware/auth');

router.route('/').get(auth,(req,res)=>{
    User.find()
    .then(user=>res.json(user))
    .catch(err=>res.status(400).json('Error:'+err))
})

router.route('/add').post(auth,(req,res)=>{
    const password=req.body.password;
    const emailId=req.body.emailId;
    if(!password||!emailId)    //validation
      return res.status(400).json({msg:'Please enter all the fields'});
    
    //checking for existing user
    User.findOne({emailId})
     .then(user=>{
         if(!user) return res.status(400).json({msg:'User doesnt exist exits'});
          bcrypt.compare(password,user.password)
           .then(match=>{
               if(!match) return res.status(400).json({msg:'Invalid Credentials'})
               jwt.sign(
                {id:user.id},    //payload
                config.get('jwtSecret'),
                {expiresIn:3600},
                (err,token)=>{
                    if(err) throw err;
                    res.json({token,user:{id:user.id}})
                }
              )
           })
     })
    
})

module.exports=router;
//session is generated when user get authenticated
//cookie use lot of the info to create a cookie.....