const connection = require("../connection/database.connection")


const getEmployee = async()=>{
const conn =  connection
try{
const query = `select * from project.employee`;

const result =conn.query(query);
console.log(result)
}catch(err){
    console.log(err);
}
}


module.exports = {
    getEmployee,
}