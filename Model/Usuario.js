const { Sequelize } = require("sequelize")
const conexion = require("../database/conexion")


const Usuario = conexion.define("usuario",{
    id_usuario:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    usuario:{
        type:Sequelize.STRING
    },
    pass:{
        type:Sequelize.STRING
    }
})

module.exports = Usuario