import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const todoSlice = createSlice({
  name: 'todoslice',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({title: action.payload, id: Date.now(), compleated: false});
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload); 
    },
    editTodo: (state, action) => {
      const { id, newTitle } = action.payload; 
      const todo = state.find(todo => todo.id === id);
      if (todo) {
        todo.title = newTitle; 
      }
    },
    deleteAll : (state) => {
      return []
    },
    handleCompleate: (state,action)=>{
      const todo = state.find((todo) => todo.id === action.payload)
      todo.compleated = !todo.compleated
    }
  }
});

export const { addTodo, deleteTodo, editTodo,deleteAll,handleCompleate } = todoSlice.actions;
export default todoSlice.reducer;
