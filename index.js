const express = require("express")
const hola_routes = require("./routes/hola_route.js")//
const app = express()
const PORT = 3006

app.set("port",PORT)
console.log("Cargando rutas de hola_route");

app.use("/api/hola", hola_routes)//

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})
app.listen(PORT,()=>{
    console.log(`server runnin in port ${PORT}`)
})