import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { db } from "../firebase/firebaseConfig";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "products");
    getDocs(colRef).then((snapshot) => {
      let items = [];
      snapshot.docs.forEach((docs) => {
        items.push({ ...docs.data(), id: docs.id });
      });
      setProducts(items);
    });
  }, []);

  const addtoCart = async (id,img,des,item,price,unit) => {
      await (addDoc(collection(db,"cartData"),{
        id,
        img,
        des,
        item,
        price,
        unit
      }).then((res)=>{
         if(res){
          alert("Data Stored Successfully");
         }
      }).catch((err)=>{
        console.log(err)
      }))
  }

  return (
    <div>
      {products.map((elements,index) => {
        return (
          <>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={elements.url} />
              <Card.Body>
                <Card.Title>Item Name : {elements.item}</Card.Title>
                <Card.Title>Price : {elements.price}</Card.Title>
                <Card.Title>Unit : {elements.unit}</Card.Title>
                <Card.Text>
                 {elements.description}
                </Card.Text>
                <Button variant="primary" onClick={()=>addtoCart(index,elements.url,elements.description,elements.item,elements.price,elements.unit)}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </>
        );
      })}
    </div>
  );
};

export default Home;
