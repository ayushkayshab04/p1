const express = require("express")
const employeeController = require("./employee.controller")

const router = express.Router()


router.get("/getEmployee",employeeController.getEmployee)



module.exports = router