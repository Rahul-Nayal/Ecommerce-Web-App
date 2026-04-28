import { useEffect, useState } from "react";
import type { Product } from "../models/Product";
import Catalog from "../../features/catalog/Catalog";
function App() {
  const [gymProducts, setProducts] = useState<Product[]>([]);

 
  function addProducts() {
    setProducts([...gymProducts, { name: "Egg", price: 6 }]);
  }

  return (
    <div>
      <ul>
        <Catalog/>
        {GymProducts.map((product,index)=>(
          <li key={index}>{product.name} contains {product.contains}</li>
          
        ))}
      </ul>

      <button onClick={addProducts}>Add Products</button>
    </div>
  );
}

export default App;