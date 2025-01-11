import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './App.css'
import { Link } from 'react-router-dom';
// import Fullimage from './Fullimage';
const App = () => {
  const [image, setImage] = useState([]); 
  // console.log(image)
  const [search, setSearch] = useState('');
  const [query,setQuery]= useState("dog")


  const [managePage,setMangepage] = useState("1")
 console.log(managePage)
console.log(search)
  const api_key = "KVHI6IQmtJVUUquD-V0o20b6J1hREjEJFM-XuMASVQg";
  const api_url = "https://api.unsplash.com/search/photos";

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `${api_url}?query=${query}&page=${managePage}&per_page=20&client_id=${api_key}`
      );
      setImage(data.results);  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
 
   
  }, [query,managePage]); 

  const submitHandler = (e)=>{
e.preventDefault()
if (search.trim()) {
  setQuery(search); 
  setSearch(''); 
}
  }

  


  
  

 

  return (

    <div className="box">

      <form onSubmit={submitHandler} >
        <div className="top">
        <input type="text" name="search" placeholder="Search image here " onChange={(e)=>{setSearch(e.target.value)}} value={search} />
        <button className='bottm' >Dog</button>
        </div>
       <div className="bottm">
         <h1>Popular Category</h1>
         <button onClick={() => setQuery('dog')}>Dog</button>
        <button onClick={() => setQuery('cat')}>Cat</button>
        <button onClick={() => setQuery('birds')}>Birds</button>
        <button onClick={() => setQuery('laptop')}>Laptop</button>
       </div>
      </form>
       <div className='container' >
      {image.map((img) => (
        <Link to={`/fullimage/:${img.id}`} key={img.id}>
          <img src={img.urls.small} alt={img.alt_description} />
        </Link>
      ))}
    
    </div>

    <div className="footer">
    <button  onClick={() => setMangepage((prev) => Math.max(prev - 1, 1))} 
          disabled={managePage === 1} >Previous</button>
      



<button className='pre' onClick={() => setMangepage((prev) => prev + 1)} >Next</button>
    </div>
    </div>
  
  );
};

export default App;
