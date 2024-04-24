import Product from "../db/productModel.js";

const HandleAddStock = async(req,res)=>{
    try{
        const addProduct = new Product({
            id:req.body.id,
            title:req.body.title,
            description:req.body.description,
            price:req.body.price,
            stock:req.body.stock,
            brand:req.body.brand,
            category:req.body.category,
            thumbnail:req.body.thumbnail,
            images:req.body.image
        })

        const productAdded = await addProduct.save();
        console.log("Added Following in the database",productAdded); 
        res.status(201).json(productAdded);
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: 'Failed to add product to database' });

    }
}

export default HandleAddStock;