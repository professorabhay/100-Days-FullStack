// Express - JS 

import { log } from 'console';
import express from 'express' ;
import path from 'path';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'

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

const userSchema = new mongoose.Schema({
    username : String,  // name of the user
    password :String ,   // password
});

//model or collection

const Message = mongoose.model("Message", msgschema)
const User = mongoose.model("User", userSchema)

// const server = express ();
const app = express();
const users=[];

// express.static(path.join(path.resolve(), "public"));
// app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

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

const isAuthenticated = async(req, res, next)=>{
    const {token} = (req.cookies)
    // if(token){
    //     // res.render("logout")
    //     next();
    // }
    // else{
    //     res.render("login")
    // }
    if(token){
        const decode = jwt.verify(token, "jjufydhfkdrtrfk")
        req.user = await User.findById(decode._id)
        next();
    }else{
        res.redirect("./login")
    }

}

app.get('/', isAuthenticated, (req, res)=> {
    // const pathlocation = path.resolve();
    // res.sendFile(path.join(pathlocation, "./index.html"));
    // res.render("index", {name: "Abhay"});
    // console.log(req.cookies.token);
    res.render("logout", {username:req.user.username})    
})

app.get("/register", (req, res)=>{
    res.render("register")
})

app.get("/login", (req, res)=>{
    res.render("login")
})

app.post("/register", async (req, res)=>{
    // console.log(req.body);
    const {username, password} = req.body
    let user = await User.findOne({username})
    if(user){
        // return console.log("Register First");
        return res.redirect("/login")
    }
    const hashpasswd = await bcrypt.hash(password, 10);
    user = await User.create({
        username,
        password: hashpasswd,
    })
})


app.post("/login", async (req, res)=>{
    // console.log(req.body);
    const {username, password} = req.body
    let user = await User.findOne({username})
    if(!user){
        // return console.log("Register First");
        return res.redirect("/register")
    }
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) return res.render("login", {username, message: "Incorrect Password"})
    const token = jwt.sign({_id:user._id}, "jjufydhfkdrtrfk");
    // console.log(token);

    res.cookie("token", token,{
        httpOnly: true,
        secure: true,
        expires: new Date(Date.now()+60*1000),
        sameSite: true
    })
    res.redirect("/")
    
    // user = await User.create({
    //     username,
    //     password,
    // })



    // const token = jwt.sign({_id:user._id}, "jjufydhfkdrtrfk");
    // // console.log(token);

    // res.cookie("token", token,{
    //     httpOnly: true,
    //     secure: true,
    //     expires: new Date(Date.now()+60*1000),
    //     sameSite: true
    // })
    // res.redirect("/")
    
})

app.get("/logout", (req, res)=>{
    res.cookie("token", "", {
        expires: new Date(Date.now())
    })
    res.redirect("/")
})

// app.post('/', async(req, res)=> {
//     // console.log(req.body);
//     // users.push({username : req.body.name}, {email: req.body.email})
//     // console.log(users)
//     // const messageData = {username : req.body.name, email: req.body.email}
//     // await Message.create(messageData) // it will only save emil because username != name
//     // await Message.create({name: req.body.name, email: req.body.email})
//     const {name, email} = req.body;
//     await Message.create({name: name, email:email});
//     res.render("success")
// })

// app.get("/users", (req, res)=>{
//     res.json({
//         users,
//     })
// })


// app.get("/add",async (req, res)=>{
//     // res.send("nice")
//     await Message.create({name: "Abhay"}, {email: "a@amail.com"})
//     res.send("added")

// })

app.listen(5000, ()=>{
    console.log("Server is working");
})