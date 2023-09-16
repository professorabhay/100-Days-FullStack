// console.log("Hello World");
// console.log("Abhay");


// import old method -> 
// const http = require("http");

// Importing via new method, but make sure to change type: module, in p.json

import http from "http";
import fs from "fs"
import path from 'path'

console.log(path.extname("./home/random/index.js"));



// Importing File based module via old method 
// const gfName = require("./features");
import gfName, {percentage} from "./features.js";
console.log(gfName);
console.log(percentage());

// Creating Server -> 

const server = http.createServer((req,res)=>{
    //Setting Route ->

    if(req.url === "/about"){
        res.end("About")
    }
    else if(req.url === "/"){
        // res.end("<h1>Home</h1>")
        fs.readFile("./index.html", (err, home)=>{
            res.end(home);
        })
    }
    else if(req.url === "/txt"){
        fs.readFile("./backend.txt", (err, txt)=>{
            res.end(txt);
        })
    }
    else if(req.url === "/love"){
        res.end(`Love is ${percentage()}`)
    }
    else{
        res.end("Page Not Found")
    }
});

server.listen(5000,()=>{
    console.log("Server");
})





