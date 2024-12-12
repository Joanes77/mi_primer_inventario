const express = require("express")
const mongoose = require("mongoose")
    require("dotenv").config()//N

const hola_routes = require("./routes/hola_route.js")//
const inventario_routes = require("./routes/inventario.js")

const app = express()
const PORT = 3006

app.set("port",PORT)
console.log("Cargando rutas de hola_route");



app.use("/api/hola", hola_routes)//
app.use("/api/inventario", inventario_routes)

mongoose.connect(process.env.MONGO_URI)
.then(console.log("conectado al mongo DB"))
.catch(err=> console.error(err))
app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})
app.listen(PORT,()=>{
    console.log(`server runnin in port ${PORT}`)
})