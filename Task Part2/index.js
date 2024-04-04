const express= require("express")
const app= express()

const mongoose= require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/userCV").then(()=>{
    console.log("Connection Establised with MongoDB...")
})
.catch((err)=>{
    console.log(err)

})


const bodyParser= require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","pug")
app.set("views","./view")


app.get("/cv",(req, res)=>{
    res.render("cv")
})


const user= require("./controller/empController")

app.post("/cv", user.insertUser)


app.get("/search",(req,res)=>{
    res.render("search")
})

app.post("/submit-form",user.getByName)

app.listen(8000,()=>{
    console.log("listening to port 8000...")
})