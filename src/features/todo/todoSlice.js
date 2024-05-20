import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};


export const todoSlice= createSlice({
    name:"todo",
    initialState,
    reducers:{
        addList:(state, action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todoList.push(todo)
        },
        removeTodo:(state, action)=>{
            state.todoList= state.todoList.filter((todo)=>
                todo.id !== action.payload
            )
        },
        updateTodo:(state, action)=>{
            state.todoList.forEach((todo, index)=>{
                if(todo.id === action.payload.id){
                    todo.text= "Hi";
                }
            })
        }
    }
})


export const {addList, removeTodo, updateTodo} =todoSlice.actions;

export default todoSlice.reducer;