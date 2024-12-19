import './App.css'
import Card from './Components/Card/Card';
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'
import { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
 

  const [card, setCard] = useState([]);
  const AddCard = (product) => {
    const isAdd = card.find((item) => item.id === product.id);
    if (isAdd) {
        setCard(card.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    } else {
        setCard([...card, { ...product, quantity: 1 }]);
    }
};

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((product) => product.category === selectedCategory);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>
  }


  return (
    <div className='App-container'>
      <Header setSelectedCategory={setSelectedCategory} />
      <Product filteredProducts={filteredProducts} AddCard ={AddCard} />
      <Card card={card} setCard={setCard} />
    </div>
  );
}

export default App;
