import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      state.push({ id: Date.now(), title: action.payload });
    },
    deleteTodo: (state, action) => {
      // Use filter to create a new array excluding the item to be deleted
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
