import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";
import axios from "axios";


export function AddProductsModal() {

  const [openModal, setOpenModal] = useState(false);
 const [addProduct,setAddProduct] = useState({
    title:"",
    description:"",
    category:"",
    stock:"",
    brand:"",
    price:"",
    image:"",
 })

  function onCloseModal() {
    setOpenModal(false);
       setAddProduct({
      title: "",
      description: "",
      category: "",
      stock: "",
      brand: "",
      price: "",
      image: "",})
  }
  function handleChange(event){
    setAddProduct({
        ...addProduct,[event.target.name]:event.target.value
   });
  }
  const handleSubmit=  async (e)=>{
    e.preventDefault();
    try{
        const res = await axios.post("http://localhost:3000/api/products/addProduct",addProduct);
        console.log("Product Added",res.data);

        onCloseModal();
        toast.success("Product Added Successfully");
        fetchProducts();
        
    }
    catch(err){
        console.log(err.message);
        toast.error("Failed TO add Product");
    }
  }

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="bg-gray-200 inline-flex mr-40 py-3 px-5 rounded-lg items-center hover:bg-gray-300 focus:outline-none"
      >
        <IoIosAddCircleOutline size={30} />
        <span class="ml-4 flex items-start flex-col leading-none">
          <span class="title-font font-medium">Add Products</span>
        </span>
      </button>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
            <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
             Add Product
            </h3>
            <div className="">   
              <div className="mb-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput
                id="title"
                name="title"
                placeholder=""
                value={addProduct.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Description" />
              </div>
              <TextInput
                id="description"
                name="description"
                placeholder=""
                value={addProduct.description}
                onChange={handleChange}
                required
              />
            </div>
          
            <div>
              <div className="mb-2 block">
                <Label htmlFor="brand" value="Brand" />
              </div>
              <TextInput
                id="brand"
                name="brand"
                placeholder=""
                value={addProduct.brand}
                onChange={handleChange}
                required
              />
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Category" />
              </div>
              <TextInput
                id="category"
                name="category"
                placeholder=""
                value={addProduct.category}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="stock" value="Stock" /> <span className="text-sm text-red-400">*Only Num</span>
              </div>
              <TextInput
                id="stock"
                name="stock"
                placeholder=""
                value={addProduct.stock}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Price" /> <span className="text-sm text-red-400">*Only Num</span>
              </div>
              <TextInput
                id="price"
                name="price"
                placeholder=""
                value={addProduct.price}
                onChange={handleChange}
                required
              />
            </div>
          
          <div>
              <div className="mb-2 block">
                <Label htmlFor="image" value="Image Link" />
              </div>
              <TextInput
                id="image"
                name="image"
                placeholder=""
                value={addProduct.image}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="mt-5 w-full">
              <Button type="submit">ADD</Button>
            </div>
         </div>
          </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
