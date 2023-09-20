import { useEffect, useState } from "react"
import { Todoprovider } from "./contexts"
import Todoform from "./components/Todoform"
import Todoitem from "./components/Todoitems"


function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((oldtodo)=>[{id: Date.now(), ...todo},...oldtodo])
  }

  const updateTodo = (id, todo) => {
    setTodos((oldtodo) => oldtodo.map((oldtodo)=>(oldtodo.id === id ? todo : oldtodo)))
  }
  
  const deleteTodo = (id) => {
    setTodos((oldtodo)=> oldtodo.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  

  return (
    <Todoprovider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <Todoform/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id} className="w-full">
                            <Todoitem todo={todo}></Todoitem>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
