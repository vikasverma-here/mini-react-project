import React from 'react'

const Form = ( {setname,setemail,setpassword,seturl,setdata,name,email,password,url,data,haldesubmit,edit}) => {
    

  



  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-900 rounded-2xl'>
      <form className='bg-gray-800 text-white p-8 rounded-lg shadow-lg w-[350px] flex flex-col gap-5'  onSubmit={haldesubmit} >
        <div className="text-center text-2xl font-semibold text-green-500 underline">
          <h1>Form Info</h1>
        </div>

        <div className="flex flex-col gap-1">
          <label className='text-lg font-medium'>Name</label>
          <input 
          value={name}
             onChange={(e)=>setname(e.target.value)}
            type="text" 
            className='outline-none border border-gray-600 p-2 rounded-md bg-gray-700 focus:ring-2 focus:ring-green-500'
            placeholder='Enter name' 
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className='text-lg font-medium'>Email</label>
          <input 
          value={email}
           onChange={(e)=>setemail(e.target.value)}
            type="email" 
            className='outline-none border border-gray-600 p-2 rounded-md bg-gray-700 focus:ring-2 focus:ring-blue-500'
            placeholder='Enter email' 
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className='text-lg font-medium'>Password</label>
          <input 
          value={password}
           onChange={(e)=>setpassword(e.target.value)}
            type="password" 
            className='outline-none border border-gray-600 p-2 rounded-md bg-gray-700 focus:ring-2 focus:ring-red-500'
            placeholder='Enter password' 
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className='text-lg font-medium'>Image URL</label>
          <input 
          value={url}
           onChange={(e)=>seturl(e.target.value)}
            type="url" 
            className='outline-none border border-gray-600 p-2 rounded-md bg-gray-700 focus:ring-2 focus:ring-yellow-500'
            placeholder='Enter Image URL' 
            required
          />
        </div>

        <button className='bg-green-600 hover:bg-green-500 text-white py-2 rounded-md font-semibold transition'>
          {edit==null?"Add":"Update"}
        </button>
      </form>
    </div>
  )
}

export default Form
