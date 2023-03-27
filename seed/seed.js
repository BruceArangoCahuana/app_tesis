const conexion =  require("../database/conexion")

const laboratorio = require("./laboratorio")
const Laboratorio = require("../Model/Laboratorio")



const importarEstado = async () =>{
    try {
        //autenticar db
        await  conexion.authenticate()
        await  conexion.sync()
        //insertar datos
        await  Laboratorio.bulkCreate(laboratorio)

        //mensaje de transferencia de datos
        console.log("Se transferio los datos")
        exit()
    }catch (error) {
        console.log(error)
        process.exit(1)
    }
}

if(process.argv[2] === "-i"){
    importarEstado();
}