import React from 'react';
import styles from './Card.module.css';


export default function Card({ card, setCard }) {

  const totalPrice = card.reduce((elm, item) => elm + item.quantity * item.price, 0)

  const removeItem = (id) => {
    setCard((card) => card.filter((item) => item.id !== id))
  }

  return (
    <div className={styles.card}>
      <h1>Cart Products</h1>
      <h1>Total Price: {totalPrice}</h1>
      {card.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <ul>
          {card.map((item, index) => (
            <li key={index}>
              <img src={item.image} width={100} height={100} alt={item.category} />
              <div>
                <p>{item.category}</p>
                <p>Price: {item.price} AMD</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: {item.price * item.quantity} AMD</p>
              </div>
              <button onClick={() => removeItem(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
