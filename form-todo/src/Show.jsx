import React from 'react';

const Show = ({data,setdata,seturl,setname,setemail,setpassword,setedit}) => {

const handleDelete = (i)=>{
   const filterData = data.filter((item,id)=>id!=i)
   setdata(filterData)
  
}

const handleEdit = (i)=>{
  console.log("edit clicked")
  const itemtoedit = data[i]
  
  // console.log(data)
  setname(itemtoedit.name)
  setemail(itemtoedit.email)
  setpassword(itemtoedit.password)
  seturl(itemtoedit.url)
setedit(i)
  
}


 


  return (
    <div className="flex flex-wrap justify-center gap-6 p-6 bg-gray-900 min-h-screen rounded-2xl">
      
      

      {
        data.map((item,i)=>{
            return(
                <div className="boxes">
                    <div className="carts bg-gray-800 p-5 rounded-lg shadow-lg text-white w-72 flex flex-col items-center h-[340px]">
        <div className="image mb-4">
          <img 
            src={item.url} 
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-gray-700"
          />
        </div>
        <div className="content text-center">
          <h1 className="text-lg font-semibold"><strong className="text-green-400">Name:</strong> {item.name}</h1>
          <h1 className="text-lg font-semibold"><strong className="text-blue-400">Email:</strong> {item.email}</h1>
          <h1 className="text-lg font-semibold"><strong className="text-red-400">Password:</strong> {item.password}</h1>
        </div>

        <div className="flex gap-3 mt-4">
            <button onClick={() => handleEdit(i)} className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-md">
              Edit
            </button>
            <button onClick={() => handleDelete(i)} className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md">
              Delete
            </button>
          </div>
      </div>
                </div>
            )
        })
      }

     

    </div>
  );
}

export default Show;
