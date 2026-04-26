import { useState } from "react"

// const GymProducts=[
//  {name: "Whey Protein",contains : 21},
//  {name: "Soya Chunks",contains : 25},
// ]


function App() {
  const[GymProducts,SetProducts] = useState([
    {name: "Whey Protein",contains : 21},
 {name: "Soya Chunks",contains : 25},
  ]);
  function addProducts(){
    SetProducts([...GymProducts,{name: "Egg",contains : 6}])
  }
  return (
    <div>
      <ul>
        {GymProducts.map((product,index)=>(
          <li key={index}>{product.name} contains {product.contains}</li>
          
        ))}
        <button onClick={addProducts}>Add Products</button>
      </ul>
    </div>
  )
}

export default App
