const DetalleAduana = require("../Model/DetalleAduana")

exports.findAllDetalleAduana = async(req,res,next) =>{
    try {
        const detalleAduana = await DetalleAduana.findAll({})
        if(detalleAduana.length > 0){
            res.json(detalleAduana)
        }
        res.json({
            "message":"No hay data registrada de detalle aduana"
        })
        
    } catch (error) {
        res.json({
            "error":error
        })
    }
}