const express= require("express")
const app= express()

const mongoose= require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/userSignUp").then(()=>{
    console.log("connection establised...")
})
.catch((err)=>{
    console.log(err)

})


const bodyParser= require("body-parser")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine","pug")
app.set("views","./view")


app.get("/signup",(req, res)=>{
    res.render("signup")
})

const user= require("./controller/empController")

app.post("/signup", user.insertUser
    // user.insertCity

)


app.listen(8000,()=>{
    console.log("listening...")
})