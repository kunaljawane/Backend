const express= require("express")

const app=express()

let port=3000;

app.listen(port,()=>
{
    console.log(`Server is listening of port ${port}`)
})

app.use((req,res)=>{
    //console.log(req); //show what is the request is
    console.log("Request Received!!"); //show that request in received or not
    res.send('Hello Dear..welcome to backend!!');
})