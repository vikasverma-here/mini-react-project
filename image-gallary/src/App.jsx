import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './App.css'
const App = () => {
  const [image, setImage] = useState([]); 
  const [search, setSearch] = useState('');
  const [query,setQuery]= useState("dog")
  const [managePage,setMangepage] = useState("1")
 
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
 
   
  }, [query]); 

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
        <div key={img.id}>
          <img src={img.urls.small} alt={img.alt_description} />
        </div>
      ))}
    
    </div>

    <div className="footer">
      <button className='pre' >Previous</button>
      <h1>10</h1>
      <button>Next</button>
    </div>
    </div>
   
  );
};

export default App;
