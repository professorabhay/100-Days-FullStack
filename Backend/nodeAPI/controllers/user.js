import { User } from "../models/user.js";


export const getAllusers = async (req, res)=>{
    const users = await User.field({});

    const keyword = req.query.keyword;
    console.log(keyword);

    res.json({
        success: true,
        users,
    });
}

export const newUser = async(req, res) => {
    const {name, email, password} = req.body;

    await User.create({
        name, 
        email, 
        password,
    });

    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Registered Successfully",
    })
}

export const special =  (req, res)=>{
    res.json({
        success :true ,
        message: "Just Joking"
    })
}

export const getUserdetail =  async(res, req)=>{
    const {id} = req.params;
    const user = await User.findById(id)

    res.json ({
        success: true,
        user,
    });
}