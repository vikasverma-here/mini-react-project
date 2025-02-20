import React from "react";

const Navbar = ({input , setinput}) => {
  return (
    <div className="flex justify-between items-center w-full p-4 border bg-gray-100">
      <div className="text-2xl font-bold">Products</div>

      <div className="flex gap-6 text-lg">
        <h3 className="cursor-pointer hover:text-blue-500 transition">First</h3>
        <h3 className="cursor-pointer hover:text-blue-500 transition">Second</h3>
        <h3 className="cursor-pointer hover:text-blue-500 transition">Third</h3>
      </div>

      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e)=>setinput(e.target.value)}
          type="text"
          placeholder="Search product by name"
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Search
        </button>
      </div>
    </div>
  );
};

export default Navbar;
