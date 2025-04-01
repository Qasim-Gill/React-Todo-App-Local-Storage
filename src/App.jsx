import TodoForm from '../components/FormInput'
import TodoItem from '../components/TodoItem'
import './App.css'
import { useContext } from "react";
import { TodoContext } from './context/TodoContext.jsx'


function App() {
  // 1️⃣ Import the context
  // 2️⃣ Use the context to get the todo state and functions
  const { todo } = useContext(TodoContext);  // Use the context

  return (
    <div className="bg-[#172842] min-h-screen py-8">
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
          <TodoForm />
        </div>
        <div className="flex flex-wrap gap-y-3">

          {/* Map through the todo items and render TodoItem component for each */}
          {todo.map((item) => (
            <TodoItem
              key={item.id}
              todo={item}
            />
          ))}
          {todo.length === 0 && (
              <div className="text-center text-gray-500">
                  No todos available. Please add some!
              </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
