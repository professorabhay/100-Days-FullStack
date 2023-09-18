// Express - JS 

import { log } from 'console';
import express from 'express' ;
import path from 'path';
import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost:27017/", {
    dbName: "backend",

})
.then(()=>{console.log("DB Connected")})
.catch(()=>console.log(e));

//schema

const msgschema = new mongoose.Schema({
    name : String,  // name of the user
    email :String ,   // email id
});

//model or collection

const Message = mongoose.model("Message", msgschema)

// const server = express ();
const app = express();
const users=[];

// express.static(path.join(path.resolve(), "public"));
// app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({extended: true}))

app.get("/getproducts", (req, res)=>{
    // res.send("Hello World");
    // res.sendStatus(404);
    // res.sendStatus(200);
    res.json({
        sucess:true,
        product:[{
            name:"iphone",
            price : 1598 ,
        },
        {   name:'mac',
            price:3678,
        }]
    })
})

app.get('/404', (req, res) => {
    res.status(400).send('hello world');
})

app.set("view engine", "ejs");

app.get('/', (req, res)=> {
    const pathlocation = path.resolve();
    res.sendFile(path.join(pathlocation, "./index.html"));
    res.render("index", {name: "Abhay"});
})

app.post('/', async(req, res)=> {
    // console.log(req.body);
    // users.push({username : req.body.name}, {email: req.body.email})
    // console.log(users)
    // const messageData = {username : req.body.name, email: req.body.email}
    // await Message.create(messageData) // it will only save emil because username != name
    // await Message.create({name: req.body.name, email: req.body.email})
    const {name, email} = req.body;
    await Message.create({name: name, email:email});
    res.render("success")
})

app.get("/users", (req, res)=>{
    res.json({
        users,
    })
})


// app.get("/add",async (req, res)=>{
//     // res.send("nice")
//     await Message.create({name: "Abhay"}, {email: "a@amail.com"})
//     res.send("added")

// })

app.listen(5000, ()=>{
    console.log("Server is working");
});