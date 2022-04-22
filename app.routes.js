const express = require("express");
const route = express.Router({mergeParams:true})
const {employeeRouter} = require("./employee/index")

route.use("/employee",employeeRouter)

module.exports = route