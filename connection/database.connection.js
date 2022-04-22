const mysql = require("mysql2")

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234567890",
  database:"project",
  port: 3306
});
conn.connect((err)=>{
  if(err){
    console.log(err)
  }else {
    console.log("connected to database")
}
})



module.exports = conn