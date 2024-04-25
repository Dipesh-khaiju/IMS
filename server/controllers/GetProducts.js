import Product from "../db/productModel.js";


const GetProducts = async(req,res)=>{
    try {
        // Fetch data from MongoDB
        const data = await Product.find(); 
        res.json(data);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}
export default  GetProducts; 