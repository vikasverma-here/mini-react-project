import React from 'react'
import { useEffect } from 'react'
const ShowTask = ({obj,cards,setcards}) => {
    useEffect(()=>{
        console.log("showing from show component",cards)
        },[cards])


            const deleteSong = (id) => {
                const filtersongs = cards.filter((item) => item.id !== id);
                setcards(filtersongs);
            };
            
        


  return (
    cards.length===0?(<h1 className='text-2xl font-bold text-center text-gray-500 mt-6' >no song found</h1>):
    <div>
    <div className="p-6 flex flex-wrap justify-center gap-6">
  {
    cards.map((item,i)=>{
        // console.log(item)
        return(
<div className="bg-white shadow-lg rounded-xl p-4 flex flex-col items-center w-64" key={i}>
    <img 
      src={item.url} 
      alt="image not found" 
      className="w-full h-40 object-cover rounded-md mb-4"
    />
    <h1 className="text-lg font-semibold"> <strong>Singer Name</strong> : {item.singer}</h1>
    <h2 className="text-lg font-semibold"> <strong>Song Name</strong> : {item.name}</h2>
    <h3 className="text-gray-600"> <strong> Album Name</strong> : {item.album}</h3>
    <button onClick={()=>deleteSong(item.id)} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
      Delete
    </button>
  </div>
        );
    })
  }

</div>

    </div>
  )
}

export default ShowTask
