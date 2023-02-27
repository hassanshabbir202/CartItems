import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const AddProduct = () => {
  const [addpro, setaddpro] = useState({
    imgUrl: "",
    itemName: "",
    unit: "",
    price: "",
    description: "",
  });

  const navigate = useNavigate();

  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setaddpro({ ...addpro, [name]: value });
  };

  const addItem = async (event) => {
    event.preventDefault();
    const { imgUrl, itemName, unit, price, description } = addpro;
    if (imgUrl && itemName && unit && price && description) {
      await addDoc(collection(db, "products"), {
        url: addpro.imgUrl,
        item: addpro.itemName,
        unit: addpro.unit,
        price: addpro.price,
        description: addpro.description
      }).then((res) => {
          if (res) {
            alert("Product Added Successfully");
          } else {
            alert("Plz Fill Out this All Fields!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Form>
        <h1 className="my-4">Add Product</h1>
        <Form.Group className="mb-3">
          <Form.Control
            style={{ width: "500px" }}
            value={addpro.imgUrl}
            type="text"
            placeholder="imgUrl"
            name="imgUrl"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            style={{ width: "500px" }}
            value={addpro.itemName}
            type="text"
            placeholder="itemName"
            name="itemName"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            style={{ width: "500px" }}
            value={addpro.unit}
            type="text"
            placeholder="unit"
            name="unit"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            style={{ width: "500px" }}
            value={addpro.price}
            type="text"
            placeholder="price"
            name="price"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            style={{ width: "500px" }}
            value={addpro.description}
            as="textarea"
            placeholder="description"
            name="description"
            rows={3}
            onChange={handleChange}
          />
        </Form.Group>
        <Link>
          <Button variant="primary mx-2" onClick={addItem}>
            Add Prodcut
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default AddProduct;
