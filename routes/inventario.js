const express = require("express")
const router = express.Router()
const {inventario_controller} = require("../controllers/inventario_controller")
router.get("/",inventario_controller)



module.exports = router