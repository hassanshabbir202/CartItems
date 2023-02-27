import { doc, collection, deleteDoc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import { db } from '../firebase/firebaseConfig';

const Cart = () => {
  const [cartItems,setCartItems] = useState([]);

  useEffect(() => {
    const colRef = collection(db, "cartData");
    getDocs(colRef).then((snapshot) => {
      let cart = [];
      snapshot.docs.forEach((docs) => {
        cart.push({ ...docs.data(), id: docs.id });
      });
      setCartItems(cart);
    });
  }, []);

  const deleteCart = (id) => {
    console.log(id)
    const docRef = doc(db, "cartData", id);
    deleteDoc(docRef).then(()=>{
        console.log("delete doc successfully")
        window.location.reload();
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div>
      {
        cartItems.map((elements,index)=>{
          return(
            <>
            <div className="cartdiv">
              <img style={{height:"300px",width:"250px"}} src={elements.img} alt="" />
              <p className="price">{elements.item}</p>
              <p className="unit">{elements.price}</p>
              <p className="item">{elements.des}</p>
              <p className="des">{elements.des}</p>
              <Button variant="primary mx-2" onClick={()=>deleteCart(elements.id)}>
               Delete Item
          </Button>
            </div>
            </>
          )
        })
      }
    </div>
  )
}

export default Cart
