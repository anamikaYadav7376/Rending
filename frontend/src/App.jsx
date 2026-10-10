import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          'https://rending.onrender.com/api/products'
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();

        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    getData();
  }, []);

  return (
    <div>
      <ProductsList products={products} />
    </div>
  );


}

export default App