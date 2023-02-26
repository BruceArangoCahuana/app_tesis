const Usuario = require("../Model/Usuario")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")


exports.createUsuario =async (req,res,next) =>{
  const usuario = new Usuario(req.body)
  usuario.pass = await bcrypt.hash(req.body.pass,12)
  try {
    await usuario.save()
        res.json({message: `Se creo con exito el usuaio: ${req.body.usuario}`})
  } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
        res.json({message: "error de session"})
  }
}

exports.sessionUsuario = async(req,res,next) =>{
    const{usuario,pass} = req.body
    const getUsuario = await Usuario.findOne({
        where:{
            usuario:usuario
        }
    })

    //validamos la existencia del usuario
    if(!getUsuario){
        await res.status(401).json({
            message:"Usuario no encontrado"
        })
        next()
    }else{
        if(!bcrypt.compareSync(pass,getUsuario.pass)){
            await res.status(401).json({
                message:"contraseña no valida"
            })
            next()
        }else{
            const token = jwt.sign({
                correo:getUsuario.correo,
                pass:getUsuario.pass,
                id_usuario:getUsuario.id_usuario
            },"llavecita",{
                expiresIn:"4h"
            })
            res.json({token})
        }
    }
} 