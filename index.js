const express = require("express")
const app = express()
const path = require("path")

// const middlelayer = (req,res,next)=>{
//     console.log(req)
//     next()
// }

app.use(express.static(path.join(__dirname,"public")))
//app.use(middlelayer)

app.get("/hello/:id",(req,res)=>{
    res.send("Hello World " + req.params.id)
})

app.get("/about", (req,res)=>{
    //res.send("This is about page")
    //res.sendFile(path.join(__dirname,"index.html"))
    //res.status(500)
    res.json({"harry": "Ahsan"})
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000")
})