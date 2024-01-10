import { app } from "./app.js";
import {connection} from "./data/database.js"

connection()

app.listen(process.env.PORT, ()=>{
    console.log("Server is working");
})