import Product from "../../db/productModel.js"

const HandleStockIncrease =async (req,res)=>{
    try{
        const productId = req.params.id;
        const stockIncrease = await Product.findByIdAndUpdate(productId,{$inc:{stock:1}},{new:true})
        if(!stockIncrease){
          return  res.status(404).send({message: 'Product not found'});

        }
        console.log(stockIncrease);
        res.json(stockIncrease);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Coulnot Increase stock"});
    }

}

export default HandleStockIncrease