import './App.css'
import {useState, useEffect} from "react";
import axios from 'axios';
function App() {

  const [product, setProduct] = useState([]);

  useEffect(()=>{
   ;(async()=>{
    const response = await axios.get('/api/products');
    console.log(response.data);
    setProduct(response.data);
   })()
       
  },[])

  return (
    <>
    <div>  
      <h2>hi</h2>
      <h1>{product.length}</h1>
    </div>
    </>
  )
}

export default App;
