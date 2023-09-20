import { createContext, useContext } from "react";

export const Todo = createContext({
    todos: [
        {
            id: 1,
            title:'Learn React',
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = ()=>{
    return useContext(Todo)
}

export const Todoprovider = Todo.Provider
