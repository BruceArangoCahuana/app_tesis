const{Sequelize} = require("sequelize")
const conexion = require("../database/conexion")
const Usuario = require("./Usuario")

const Producto = conexion.define("producto",{
    id_producto:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:Sequelize.STRING
    },
    marca:{
        type:Sequelize.STRING
    }
    ,
    descripcion:{
        type:Sequelize.STRING
    } ,
    presentacion:{
        type:Sequelize.STRING
    },
    cantidad:{
        type:Sequelize.INTEGER
    },
    precio_float:{
        type:Sequelize.DECIMAL
    },
    cif_total:{
        type:Sequelize.DECIMAL
    },
    cif_unidad:{
        type:Sequelize.DECIMAL
    },
    exportador:{
        type:Sequelize.STRING
    }
})

Producto.belongsTo(Usuario);
module.exports = Producto