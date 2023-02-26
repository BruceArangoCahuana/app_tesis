const Producto = require("../Model/Producto")

exports.findAllProducto = async(req,res,next) =>{
    try {
        const producto = await Producto.findAll({})
        if(producto.length > 0){
            res.json(producto)
        }
        res.json({
            "message":"No hay data registrada de producto"
        })
        
    } catch (error) {
        res.json({
            "error":error
        })
    }
}