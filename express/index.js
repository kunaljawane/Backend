const express= require("express")

const app=express()

let port=3000;

app.listen(port,()=>
{
    console.log(`Server is listening of port ${port}`)
})

// app.use((req,res)=>{
//     //console.log(req); //show what is the request is
//     console.log("Request Received!!"); //show that request in received or not
//     res.send('Hello Dear..welcome to backend!!');
// })

app.get("/",(req,res)=>{//this is rout path
    res.send("This is Home page");
})

app.get("/about",(req,res)=>{//this is /about path
    res.send("This is about page");
})

app.get("/help",(req,res)=>{//this is //help path
    res.send("This is Help page");
})

app.get("/contact",(req,res)=>{
    res.send("This is contact page");
})