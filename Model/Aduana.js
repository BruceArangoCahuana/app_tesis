const { Sequelize } = require("sequelize")
const conexion = require("../database/conexion")
const Detalleaduana = require("./DetalleAduana")
const Usuario = require("./Usuario")

const Aduana = conexion.define("aduana",{
    id_aduana:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    fecha_salida:{
        type:Sequelize.DATE
    }
})
Aduana.belongsTo(Detalleaduana);
Aduana.belongsTo(Usuario);
module.exports = Aduana