import React, { useContext, useEffect } from 'react'
import { ArticleContext } from './context/NewsContext'
import "./App.css"
const App = () => {

  const newsData = useContext(ArticleContext)
console.log(newsData)
  return (
    <div className='container'>




     {
newsData.newsData.map((item) => {
  return (
   
<div className="box" key={item.id}>
  <img src={item.
urlToImage
} alt="" />
<h2>{item.title}</h2>
<p>{item.description
}</p>
<div className="bottom">
  <p className="source">
    {item.source.name}
  </p>
  <p className="date">
    {item.
publishedAt}
  </p>
</div>

</div>
  );
})

     }
    </div>
  )
}

export default App
