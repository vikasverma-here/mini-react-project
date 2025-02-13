import { createContext } from "react";
import { useState,useEffect } from "react";
export const ArticleContext = createContext([])

export const ArtcileProvider =({children})=>{

    const [newsData, setnewsData] = useState([])

    
  const fetchData = async()=>{
    var url = 'https://newsapi.org/v2/everything?' +
  'q=modi&' +'apiKey=018087701f8f4d1da5ec6258f13c9b0c';
    const data= await fetch(url)
    const json = await data.json()
    // console.log(json.articles)
    setnewsData(json.articles)
  }

  useEffect(()=>{
   fetchData()
  },[])


    return <ArticleContext.Provider value={{newsData}} >
{children}
    </ArticleContext.Provider>
}

