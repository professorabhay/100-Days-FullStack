// Express - JS 

import express from 'express' ;
import path from 'path';

// const server = express ();
const app = express();

// express.static(path.join(path.resolve(), "public"));
app.use(express.static(path.join(path.resolve(), "public")));

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
    // const pathlocation = path.resolve();
    // res.sendFile(path.join(pathlocation, "./index.html"));
    res.render("index", {name: "Abhay"});
})

app.listen(5000, ()=>{
    console.log("Server is working");
});