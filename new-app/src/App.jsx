import React, { useContext, useEffect } from "react";
import { ArticleContext } from "./context/NewsContext";
import { useState } from "react";
import "./App.css";
const App = () => {
  
  // console.log(input)
  const newsData= useContext(ArticleContext);
  const {input,setinput} = useContext(ArticleContext)
  
  // console.log(newsData);
const handleSubmit = (e)=>{
e.preventDefault()
}

  return (newsData.newsData.length===0)?(<h1>Loading</h1>): (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="serch-here" value={input} onChange={(e)=> setinput(e.target.value)}  />
      <button>Search</button>
    </form>
    <div className="container">
      {newsData.newsData.map((item) => {
        return (
          <div className="box" key={item.id}>
            <img src={item.urlToImage} alt="" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <div className="bottom">
              <p className="source">{item.source.name}</p>
              <p className="date">{item.publishedAt}</p>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default App;
