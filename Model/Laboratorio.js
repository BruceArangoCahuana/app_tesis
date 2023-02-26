const{Sequelize} = require("sequelize")
const conexion = require("../database/conexion")
const Usuario = require("./Usuario")

const Laboratorio = conexion.define("laboratorio",{
    id_laboratorio:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:Sequelize.STRING
    }
})

Laboratorio.belongsTo(Usuario);
module.exports = Laboratorio