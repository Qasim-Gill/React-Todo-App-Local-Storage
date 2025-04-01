import { useState } from "react";
import { useContext } from "react";
import { TodoContext } from '../src/context/TodoContext'  // Import context

function TodoItem({ todo }) {
    const { updateTodo, completeTodo, deleteTodo } = useContext(TodoContext);  // Use the context
    // TodoItem component to display each todo item
    // Props: todo (object containing todo details)
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoText, setTodoText] = useState(todo.text); // ✅ Store editable text in local state

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black w-full ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={() => completeTodo(todo.id)}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoText}  // ✅ Use the local state that updates live
                onChange={(e) => (setTodoText(e.target.value))}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (isTodoEditable) {
                        updateTodo(todo.id, { text: todoText });
                    }
                    setIsTodoEditable(!isTodoEditable);
                }}
                // Disable the button if the todo is completed
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
