const Producto = require("../Model/Producto")

exports.findAllProducto = async(req,res,next) =>{
    try {
        const producto = await Producto.findAll({})
        res.json(producto)   
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
    }
}

exports.createProducto = async(req,res,next) =>{
    const producto = new  Producto(req.body)
    const{nombre} = req.body
    try {
       await producto.save()
        res.json({message:`Se creo el producto: ${nombre}`})
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
    }
}

exports.byIdProducto = async(req,res,next)=>{
    const id = req.params.idproducto
    console.log(id)
    try {
        const producto = await Producto.findByPk(id)
        res.json(producto)
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
        res.json({message: "error al crear data"})
    }
   
}

exports.editProducto = async(req,res,next) =>{
    const id = req.params.idproducto
    try {
        await Producto.update(req.body,{
            where:{
                id_producto:id
            }
        })
        res.json({message: "Se modifico correctamente"})
    } catch (error) {
        console.log(error)
        res.send(error)
        res.status(500).err(error)
        res.json({message: "error al crear data"})
    }
}