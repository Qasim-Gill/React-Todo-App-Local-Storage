import { useContext } from "react";
import { TodoContext } from '../src/context/TodoContext'

function TodoForm() {
    const { addTodo } = useContext(TodoContext);  // Use the context
    return (
        <form  className="flex" onSubmit={(e) => {
            e.preventDefault();
            const input = e.target.elements[0];
            const newTodo = input.value.trim();
            if (newTodo) {
                addTodo({ text: newTodo, completed: false });
                input.value = ""; // Clear the input field after adding a todo
            }
        }}>
            {/* Input field for adding new todos */}
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

