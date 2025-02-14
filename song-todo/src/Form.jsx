
import { useState } from 'react';
import ShowTask from './showTask';
import { nanoid } from 'nanoid';
const Form = () => {

    const [name, setname] = useState("")
    const [album, setalbum] = useState("")
    const [url, seturl] = useState("")
    const [singer, setsinger] = useState("")
    const [cards, setcards] = useState([])

const obj ={
    name,
    album,
    url,
    singer,
    id:nanoid()
}
// console.log(obj)

const handlesubmit = (e)=>{
e.preventDefault()
setcards([...cards,obj])
setname("")
setalbum("")
seturl("")
setsinger("")
// console.log(cards)
}



  return (
    
    <>
  <h1 className=" text-3xl mb-2 flex justify-center font-[600]" > Songs Collection </h1>
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl">
        
      <form className="space-y-4" onSubmit={handlesubmit} >
        <div className="flex flex-col">
          <label className="text-gray-700">Song Name : </label>
          <input 
          required
            type="text" 
            placeholder="Enter song name" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={name}
            onChange={(e)=>setname(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700">Singer name : </label>
          <input 
          required
            type="text" 
            placeholder="Enter singer name" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={singer}
            onChange={(e)=>setsinger(e.target.value)}
          />
        </div>
 
        <div className="flex flex-col">
          <label className="text-gray-700">Album Name : </label>
          <input 
          required
            type="text" 
            placeholder="Enter album name" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={album}
            onChange={(e)=>setalbum(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-gray-700">Song Poster path : </label>
          <input 
          required
            type="url" 
            placeholder="Enter poster URL" 
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" 
            value={url}
            onChange={(e)=>seturl(e.target.value)}
          />
        </div>
 
        <button  className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition">
          Submit
        </button>
      </form>
    </div>

<ShowTask obj={obj} cards={cards} setcards={setcards} />

    </>
  );
};

export default Form;
