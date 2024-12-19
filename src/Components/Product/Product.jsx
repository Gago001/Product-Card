import React from 'react';
import styles from './Product.module.css';

export default function Product({ filteredProducts ,AddCard}) {
  

    return (
        <div className={styles.product}>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.category} style={{ width: '160px', height: '140px' }} />
                        <h1>{product.category}</h1>
                        <h3>Price: {product.price}</h3>
                        <p>AMD</p>
                        <button onClick={() => AddCard(product)}>Order</button>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}
