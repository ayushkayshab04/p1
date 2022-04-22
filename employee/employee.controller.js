const employeeService = require("./employee.service")

const getEmployee = async(req,res,next)=>{
    try{
        const employeeList =  await employeeService.getEmployee()
        console.log(employeeList)

    }catch(err){
        throw new Error(err)
    }
}


module.exports = {
    getEmployee
}