import Product from "../../db/productModel.js"

const HandleUpdate =async (req,res)=>{
    try{
       const productId = req.params.id;
       const {id,title,description,stock,price,brand,category,thumbnail,images} = req.body;
       const updateData = await Product.findByIdAndUpdate(productId,{id,title,description,stock,price,brand,category,thumbnail,images},{new:true});

       if(!updateData){
        return res.status(404).json({message: "Product not found"});
       }
       console.log(updateData);
       res.json(updateData);

    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Coulnot Update stock"});
    }

}

export default HandleUpdate