const{Sequelize} = require("sequelize")
const conexion = require("../database/conexion")

const Producto = require("./Producto")
const Laboratorio = require("./Laboratorio")
const Usuario = require("./Usuario")

const Detalleaduana = conexion.define("detalleaduana",{
    id_detalleaduana:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    }
})

Detalleaduana.belongsTo(Producto);
Detalleaduana.belongsTo(Laboratorio);
Detalleaduana.belongsTo(Usuario);
module.exports = Detalleaduana