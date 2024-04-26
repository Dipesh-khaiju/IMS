import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

export function EditModal() {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <button
        onClick={() => setOpenModal(true)} >

        <FiEdit size={25} />
      </button>

      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
       Edit Product
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Title" />
              </div>
              <TextInput
                id="title"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Description" />
              </div>
              <TextInput
                id="title"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Category" />
              </div>
              <TextInput
                id="category"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Stock" />
              </div>
              <TextInput
                id="stock"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Brand" />
              </div>
              <TextInput
                id="brand"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Price" />
              </div>
              <TextInput
                id="Price"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="title" value="Image Link" />
              </div>
              <TextInput
                id="image"
                placeholder=""
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            
            <div className="w-full">
              <Button>Edit</Button>
            </div>
         
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
