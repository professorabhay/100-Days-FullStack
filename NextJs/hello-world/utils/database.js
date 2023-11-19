import { mongoose } from "mongoose"


export const connectDB=async () => {
    try {
      const {connection} = await  mongoose.connect("mongodb://localhost:27015", {dbName: "Abhay"})
      console.log(`db connected ${connection.host}`)
    } catch (error) {
        console.log(`Error`, error)
    }
}