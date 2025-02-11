import React, { useEffect, useState } from 'react'


const App = () => {


const [resut, setresut] = useState([])
const [input, setinput] = useState("")
const [showresults, setshowresults] = useState(false)
const [cache, setcache] = useState({})

const fetchData = async()=>{
  const responses = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
  
  const data= await responses.json()
  setresut(data?.recipes)
  console.log(data.recipes)

  
}

useEffect(()=>{
  const timer =setTimeout(fetchData,500);
// fetchData()

return ()=>{
  clearInterval(timer)
}


},[input])
  return (
    <div>
      <div className="input">
        <input type="text" value={input} placeholder='search-recepi here ' onChange={(e)=>setinput(e.target.value)} 
        onFocus={(e)=>setshowresults(true)}
        onBlur={()=>setshowresults(false)}
        />
      </div>

      <div className="show-result">
        {
 showresults && resut.map((r,i)=><span  key={i} >{<h1>{r.name}</h1>}</span>)
        }
      </div>
    </div>
  )
}

export default App
