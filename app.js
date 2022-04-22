const express = require("express");
const app = express();
const route = require("./app.routes")

const port = process.env.PORT||3000

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

app.use(route)

app.get("/",(req,res)=>{res.send("Learning NodeJs")})

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})