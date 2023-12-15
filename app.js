const fs = require("fs")
const express = require("express")
const server = express()
server.get("/product/:id" ,(req,res)=>{
    let data = fs.readFileSync("./data.json","utf-8")
    const selected = JSON.parse(data).find(item => item.id == req.params.id)
    if(selected){ 
        res.send(selected)

    }
    else{
        res.send("yoxdu")
    }
})
server.listen(4000, ()=>{
    console.log("Server calisdi")
})