const express= require("express");
const app=express();
const port=3000;

const { v4: uuidv4 } = require('uuid');

const methodOverride = require('method-override');
app.use(methodOverride('_method'));


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
    let id=uuidv4();
    post.push({id,username,content});
    console.log(req.body);
    res.redirect("/posts");
})

app.get('/posts/new',(req,res)=>{
    res.render('new.ejs');
})

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let postid=post.find((p)=>id === p.id);
    console.log(postid);
    // res.send("working..")
    res.render("show.ejs",{postid});
})

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let postid=post.find((p)=>id === p.id);
    res.render("edit.ejs",{postid})

})

// app.patch("/posts/:id",(req,res)=>{
//     let {id}=req.params;
//     let newContent = req.body.params;
//     let postid=post.find((p)=>id === p.id);
//     postid.content=newContent;
//     console.log(postid);
//     res.send("Patch Request working");

// })

app.patch("/posts/:id", (req, res) => {
    const { id } = req.params;
    const newContent = req.body.content; // Access content from req.body

    // Find the post by ID
    const postIndex = post.findIndex(p => p.id === id);

    // If the post is found, update its content
    if (postIndex !== -1) {
        post[postIndex].content = newContent;
        console.log(post[postIndex]); // Log the updated post
        return res.send("Patch Request working");
    } else {
        return res.status(404).send("Post not found");
    }
});
let post=[
    {
        id:uuidv4(),
        username:"kunal",
        content:"hey this is Kunal"
    },
    {
        id:uuidv4(),
        username:"Sakshi",
        content:"I want Chocolate!!"
    },
    {
        id:uuidv4(),
        username:"Harsh",
        content:"Lets plan a Trip!!"
    }
]