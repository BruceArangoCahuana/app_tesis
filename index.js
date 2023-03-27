const express = require("express")
const router = require("./router")
const bodyParser = require("body-parser")
const conexion = require("./database/conexion")

const cors = require("cors")
require("./Model/Aduana")
require("./Model/DetalleAduana")
require("./Model/Laboratorio")
require("./Model/Producto")
require("./Model/Usuario")
conexion.sync()
    .then(()=>console.log("Conexion exitosa"))
    .catch(err => console.log(err))


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use("/",router())

app.listen(3005,() =>{
    console.log(`http://localhost:${3005}/`)
})