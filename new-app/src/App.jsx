import React, { useContext, useEffect } from "react";
import { ArticleContext } from "./context/NewsContext";

import "./App.css";
const App = () => {
  const [input, setinput] = useState()
  const newsData = useContext(ArticleContext);
  console.log(newsData);
  return (newsData.newsData.length===0)?(<h1>Loading</h1>): (
    <>
    <form>
      <input type="text" placeholder="serch-here" onChange={()=>}  />
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
