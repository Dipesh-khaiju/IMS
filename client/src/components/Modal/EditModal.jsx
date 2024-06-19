import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import axios from "axios";
import toast from "react-hot-toast";

export function EditModal({ productId ,onEditSuccess}) {
  const [openModal, setOpenModal] = useState(false);
  const [editProduct, setEditProduct] = useState({
    stock: "",
  });

  function onCloseModal() {
    setOpenModal(false);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setEditProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    try {
      const idProduct = productId;
      const res = await axios.put(
        `https://ims-sdhv.onrender.com/api/products/update/${idProduct}`,
        editProduct
      );
      console.log("Product Edited", res.data);
      onCloseModal();
      toast.success("Product Edited Successfully");
      if (typeof onEditSuccess === "function") {
        onEditSuccess();
      }
    } catch (error) {
      console.error("Error editing product:", error);
      console.log("Response data:", error.response.data);
      console.log("Response headers:", error.response.headers);
      toast.error("Failed to Edit product");
    }
  };
  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <FiEdit size={25} />
      </button>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleEditSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Edit Product
              </h3>

              <div>
                <div className="mb-2 block">
                  <Label htmlFor="stock" value="Stock" />{" "}
                  <span className="text-sm text-red-400">*Only Num</span>
                </div>
                <TextInput
                  id="stock"
                  name="stock"
                  placeholder=""
                  value={editProduct.stock}
                  onChange={handleChange}
                />
              </div>

              <div className="mt-5 w-full">
                <Button type="submit">Edit</Button>
              </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}
