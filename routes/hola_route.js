const express = require("express")
const router = express.Router()
const hola_controllers = require("../controllers/hola_controller")
router.get("/",hola_controllers.hola_mundo)

router.get("/", (req,res)=>{
    console.log("hola desde rutassssss")
    res.send("Hola desde rutas")
})

module.exports = router

