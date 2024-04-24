import Product from "../db/productModel.js";

const HandleDeleteStock = async(req,res)=>{
    try{
        const productId = req.params.id;
        const deletedProduct = await Product.findByIdAndDelete(productId);
        // if (!deletedProduct) {
        //     return res.status(404).json({ message: 'Product not found' });
        //   }
        console.log("Deleted Product With id",productId);
          res.json({ message: 'Product deleted successfully' });

    }
    catch(Err){
        console.log(Err);
        res.status(500).json({message:"Couldnot delete the stock"})
    }
}

export default HandleDeleteStock