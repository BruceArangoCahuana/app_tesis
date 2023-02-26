const jwt = require("jsonwebtoken")
require("dotenv").config({path:"variable.env"})

module.exports = (req,res,next) =>{
 const authHeader = req.get("Authorization")

 /** validamos autorizacion */
 if(!authHeader){
   const error = new Error("No Autorizado")
   error.statusCode(401)
   throw error;
 }

  /** obtener data token */
  const token =  authHeader.split(" ")[1]
  let  revisar
  try {
    revisar = jwt.verify(token,process.env.LLAVETOKEN)
  } catch (error) {
    error.statusCode(500)
    throw error;
  }

 /** validacion token */
 if(!revisar){
    const error = new Error("No Autorizado")
   error.statusCode(401)
   throw error;
 }
 next()
}