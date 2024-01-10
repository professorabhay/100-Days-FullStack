import mongoose from 'mongoose'

const useSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            min: [8, 'Password must be atleast length 8'],
        }
    }, {timestamps:true} 
)

export const User = mongoose.model("User", useSchema)




// When that "User" went to db (in mongoDB) then it converts in the form of users [make all plural with small char]

