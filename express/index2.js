const express = require("express")

const app=express()

let port=3000;

app.listen(port,()=>{
    console.log(`Listening on the port ${port}`);
})

app.get('/',(req,res)=>{
    res.send("This is Home page");
})

app.get('/about',(req,res)=>{
    res.send("This is about page");
})

app.get('/help',(req,res)=>{
    res.send("This is Help page");
})

app.get('/contact',(req,res)=>{
    res.send("index.html");
})