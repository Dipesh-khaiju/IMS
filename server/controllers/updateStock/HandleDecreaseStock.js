import Product from "../../db/productModel.js"

const HandleStockDecrease =async (req,res)=>{
    try{
        const productId = req.params.id;
        const stockDecrease = await Product.findByIdAndUpdate(productId,{$inc:{stock:-1}},{new:true})
        if(!stockDecrease){
          return  res.status(404).send({message: 'Product not found'});

        }
        console.log(stockDecrease)
        res.json(stockDecrease);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "Coulnot Decrease stock"});
    }

}

export default HandleStockDecrease