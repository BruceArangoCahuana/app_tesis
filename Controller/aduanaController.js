const Aduana = require("../Model/Aduana")
const DetalleAduana = require("../Model/DetalleAduana")
const Producto = require("../Model/Producto")
const Laboratorio = require("../Model/Laboratorio")
exports.findAllAduana = async(req,res,next) =>{
    try {
        const aduana = await Aduana.findAll({
            include:[
                {model:DetalleAduana,include:[
                    {model:Producto}
                ]},
                
            ]
        })
        res.json(aduana)
       
        
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
        res.json({message: "error al crear data"})
    }
}

exports.createAduana =async(req,res,next)=>{
    const aduana = new Aduana(req.body)
    
    try {
        await aduana.save()
        res.json({message:`Se correctamente`})
        
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
        res.json({message: "error al crear data"})
    }
}