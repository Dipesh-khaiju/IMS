import Product from "../db/productModel.js";

const HandleSearch = async(req,res)=>{
    const {query} =req.query;

    try{
        const products =  await Product.find({ title: { $regex: query, $options: "i" }});

        res.json(products)
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

export default HandleSearch;