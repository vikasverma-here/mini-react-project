import React from 'react'
import Show from './Show'
import Form from './Form'
import { useState } from 'react'
const App = () => {
  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [url, seturl] = useState()
  const [data, setdata] = useState([])
  const [edit, setedit] = useState(null)
  console.log(edit)
console.log()
  const haldesubmit = (e)=>{
    e.preventDefault() 
    const dataObj = {
       name,
       password,
       email,
       url
    }
if(edit!==null){
  const updateData=[...data]
  updateData[edit]=dataObj
  setdata(updateData)
  setedit(null)
}else{
  setdata([ ...data,dataObj])
}
setemail("")
setname("")
setpassword("")
seturl("")
console.log(data)
}

  return (
    <div className=' p-5 bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdSOzNwhIvZvEi_lyvOxVEbZ-aXIgw-tEPkA&s)] '>
      <div className="container flex  gap-1 ">
      <div className="form w-[30%] h-screen border bg-neutral-500 rounded-2xl shadow-lg">
     <Form setname={setname} setemail={setemail} setpassword={setpassword} seturl={seturl} setdata={setdata} data={data} name={name} email={email} password={password} url={url} haldesubmit={haldesubmit} edit={edit} />
      </div>
      <div className="showdata bg-neutral-700 w-[70%] border rounded-2xl shadow-lg">
        <Show data={data} setdata={setdata} setname={setname} setemail={setemail} setpassword={setpassword} seturl={seturl} setedit={setedit} edit={edit} />
      </div>
      </div>
      
    </div>
  )
}

export default App
