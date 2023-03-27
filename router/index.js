const express = require("express")
const router = express.Router()


const appController =  require("../Controller/appController")
const aduanaController =  require("../Controller/aduanaController")
const detalleController =  require("../Controller/detalleController")
const laboratorioController =  require("../Controller/laboratorioController")
const productoController = require("../Controller/productoController")
const usuarioController = require("../Controller/usuarioController")

module.exports = function (){
    router.get("/",appController.viewStart)

    /** Aduana */
    router.get("/aduana",aduanaController.findAllAduana)
    router.post("/aduana",aduanaController.createAduana)

    /** Detallea aduana */
    router.get("/detalle-aduana",detalleController.findAllDetalleAduana)
    router.post("/detalle-aduana",detalleController.createDetalleAduana)

    /** laboratorio */
    router.get("/laboratorio",laboratorioController.findAllLaboratorio)
    router.post("/laboratorio",laboratorioController.createLaboratorio)
    router.get("/laboratorio/:idlaboratorio",laboratorioController.byIdLaboratorio)
    router.put("/laboratorio/:idlaboratorio",laboratorioController.editLaboratorio)
    router.delete("/laboratorio/:idlaboratorio",laboratorioController.deleteLaboratorio)

    /** laboratorio */
    router.get("/producto",productoController.findAllProducto)
    router.post("/producto",productoController.createProducto)
    router.get("/producto/:idproducto",productoController.byIdProducto)
    router.put("/producto/:idproducto",productoController.editProducto)


     /** usuarios */
     router.post("/crear-usuario",usuarioController.createUsuario)
     router.post("/iniciar-session",usuarioController.sessionUsuario)
     

    return  router
}