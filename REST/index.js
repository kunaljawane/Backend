const express= require("express");
const app=express();
const port=3000;

const path=require("path");

app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));


app.listen(port,()=>{
    console.log(`Listning on port ${port}`);
})

// app.get('/',(req,res)=>{
//     res.send("This is Home page!!");
// })

app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts:post});
})

app.post('/posts',(req,res)=>{
    let {username, content}=req.body;
    post.push({username,content});
    console.log(req.body);
    res.redirect("/posts");
})

app.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
})


let post=[
    {
        username:"kunal",
        content:"hey this is Kunal"
    },
    {
        username:"Sakshi",
        content:"I want to Breakup"
    },
    {
        username:"Harsh",
        content:"Lets plan a Trip!!"
    }
]