const config=require('config');
const jwt=require('jsonwebtoken');

function auth(req,res,next)  //to get token sent from react,postman or frontend etc
{
   const token=req.header('x-auth-token');

   //check for token
   if(!token) return res.status(401).json({msg:'Authorisation denied'}); //401 error for unauthorized 
   
   //verify
   try
      {
          const decoded=jwt.verify(token,config.get('jwtSecret'));
          req.user=decoded;//add user to payload
          next();
      }
   catch(e){}
}
module.exports=auth;