import React, { useEffect, useState } from 'react'
import ProductsList from './ProductsList';

function App() {

 const [products,setProducts]=useState([]);

    useEffect(()=>{
      // console.log("punima");
      async function getData(){
        console.log(".....loading");
        let responce=await fetch("https://rending.onrender.com/api/products");;
           let data=  await responce.json();
          //  console.log(data);
           setProducts(data.products);
           console.log(products);
      }


     getData();
    },[])

  return (
    <div>

    <ProductsList products={products}/>

    </div>
  )
}

export default App