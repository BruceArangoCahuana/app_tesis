const Aduana = require("../Model/Aduana")

exports.findAllAduana = async(req,res,next) =>{
    try {
        const aduana = await Aduana.findAll({})
        if(aduana.length > 0){
            res.json(aduana)
        }
        res.json({
            "message":"No hay data registrada de aduana"
        })
        
    } catch (error) {
        res.json({
            "error":error
        })
    }
}