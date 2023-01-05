const express=require("express")
const app=express()
app.get("/",(req,res)=>{
    res.send("Saludos mortal")
    
})
app.listen(8080,()=>{
    console.log("Servidor iniciado");
})