import {connectDB} from "../../../utils/database"; 


export default async function handler(req, res){
    await connectDB();
    const products = [{
        name: "apple",
        price: 2322
    }]
    res.status(200).json({name: 'Product', products})
}