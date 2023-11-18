import mongoose from "mongoose";

export const connection = () => {
    mongoose.connect( process.env.MONGO_URI, {
    dbName: "backendapi",
})
    .then(()=>{console.log("DB Connected")})
    .catch(()=>console.log(e));
}