import React, { useEffect, useState } from "react";
import data from "./data.json";

const Hero = ({ input, setinput }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [low, setlow] = useState(false)
  const [high, sethigh] = useState(false)
const [catval, setcatval] = useState("")
  console.log(low,high)
  useEffect(() => {
    setProducts(data.data.items);
    setCategories([...new Set(data.data.items.map((item) => item.category))]);
    
  }, []);


  const searchedItems = products.filter((item) =>
  {
    return(
        (item.name.toLowerCase().includes(input.toLowerCase())) && ({
            if(low){
              const result = products.sort((a,b)=>a.price-b.price)
               console.log(result)
            }
        })

    )
   
    
  }
  );
  

    const categoryFunction=(category)=>{
        let catfilter = products.filter((item,i)=>item.category==category)
           
           setProducts(catfilter)
 
     }

   

  return (
    <div className="flex w-full p-6 gap-6">
     
      <div className="w-1/4 border-r border-gray-300 p-4">
       
        <div className="mb-6">
          <h1 className="text-xl font-bold mb-3">Filter By</h1>
          <div className="flex items-center gap-2 mb-2">
            <input type="checkbox" onClick={(e)=>setlow(!low)} className="w-5 h-5" />
            <label className="text-lg">Low to High</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" className="w-5 h-5" onClick={(e)=>sethigh(!high)} />
            <label className="text-lg" >High to Low</label>
          </div>
        </div>

     
        <div>
          <h1 className="text-xl font-bold mb-3">Categories</h1>
          <div className="space-y-3">
            {categories.map((category, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 border rounded"></div>
                <h1 className="text-lg" value={category} onClick={()=>categoryFunction(category)} >{category}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>

     
      <div className="w-3/4 p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-3 gap-6">
          {searchedItems.length > 0 ? (
            searchedItems.map((product) => (
              <div
                className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-4"
                key={product.id}
              >
                <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <div
                  className="text-sm text-gray-600 mt-2"
                  dangerouslySetInnerHTML={{ __html: product.features }}
                />
                <p className="text-xl font-semibold text-green-600 mt-4">
                 Category: {product.category}
                </p>
                <p className="text-xl font-semibold text-green-600 mt-4">
                  ${product.price}
                </p>
                <p className="text-xl font-semibold text-green-600 mt-4">
                  ${product.category}
                </p>
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
                  Buy Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
