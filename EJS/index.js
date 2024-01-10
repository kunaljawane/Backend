let express=require("express")

const app=express()

const port=8080;

// app.use((req,res)=>{
//     console.log("Request Received!!")
// })

app.listen(port,(req,res)=>{
    console.log(`listening on port ${port}`)
})

app.set("views engine","ejs");

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

