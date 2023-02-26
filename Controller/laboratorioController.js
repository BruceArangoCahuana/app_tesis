const Laboratorio = require("../Model/Laboratorio")

exports.findAllLaboratorio = async(req,res,next) =>{
    try {
        const laboratorio = await Laboratorio.findAll({
            attributes: ['id_laboratorio', 'nombre']
        })
        if(laboratorio.length > 0){
            res.json(laboratorio)
        }
        res.json({
            "message":"No hay data registrada de labotario"
        })
        
    } catch (error) {
        res.json({
            "error":error
            })
    }
}

exports.createLaboratorio = (req,res,next) =>{
    const laboratorio = new Laboratorio(req.body)
    const{ nombre } = req.body
    try {
        laboratorio.save()
        res.json({message:`Se creo el laboratorio: ${nombre}`})
        
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
        res.json({message: "error al crear data"})
    }
}

exports.byIdLaboratorio = async(req,res,next) =>{
    const id = req.params.idlaboratorio
    try {
        const laboratorio = await Laboratorio.findByPk(id)
        res.json(laboratorio)
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
        res.json({message: "error al crear data"})
    }
    
}


exports.editLaboratorio = async(req,res,next) =>{
    const id = req.params.idlaboratorio
    try {
        await Laboratorio.update(req.body,{
            where:{
                id_laboratorio:id
            }
        })
        res.json({message:`Se actulizo el laboratorio`})
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
        res.json({message: "error al crear data"})
    }

}

exports.deleteLaboratorio = async(req,res,next) =>{
    const id = req.params.idlaboratorio
    try {
        await Laboratorio.destroy({
            where:{
                id_laboratorio:id
            }
        })
        res.json({message:`Se actulizo el laboratorio`})
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
        res.json({message: "error al crear data"})
    }
}