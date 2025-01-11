import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addtodo, deleteTodo } from './redux/todoSlice'
const App = () => {
  const [text, settext] = useState("")
  console.log(text)
const todo = useSelector((state)=>state.todos)
console.log(todo)


const handlSubmit=(e)=>{
 e.preventDefault()
 console.log(text)
}

const dispatch = useDispatch()

const handleAddTodo = () => {
  if(text.trim()){
  dispatch(addtodo(text))
  settext("")
  }
}

const handleDeleteTodo = (id)=>{
 dispatch(deleteTodo(id))
}

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form onSubmit={handlSubmit} >
        <input type="text" placeholder="Enter Todo" onChange={(e)=>settext(e.target.value)} value={text} />
        <button type="submit" onClick={handleAddTodo}>Add Todo</button>
      </form>


      {
        todo.map((item)=>
        <li key={item.id}>
          {item.title}
          <button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
        </li>
        )
        
      }
    </div>
  )
}

export default App
