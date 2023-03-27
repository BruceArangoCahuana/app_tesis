const DetalleAduana = require("../Model/DetalleAduana")
const Producto = require("../Model/Producto")
const Laboratorio = require("../Model/Laboratorio")
const Usuario = require("../Model/Usuario")
exports.findAllDetalleAduana = async(req,res,next) =>{
    try {
        const detalleAduana = await DetalleAduana.findAll({
            include:[
                {model:Producto}
            ]
        })
        res.json(detalleAduana)
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
    }
}

exports.createDetalleAduana = async(req,res,next) =>{
    const detalleAduana =  new DetalleAduana(req.body)
    try {
        await detalleAduana.save()
        res.json({message:`Se creo el correctamente`})
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
    }
}