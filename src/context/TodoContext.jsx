import { createContext, useState, useEffect } from "react";

// 1️⃣ Create a Context with a correct default value
export const TodoContext = createContext({
    todo: [],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    completeTodo: (id) => {},
    deleteTodo: (id) => {},
});

export function TodoContextProvider({ children }) {
    const [todo, setTodo] = useState(() => {
        // Load todos from local storage on mount
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    });

    // 2️⃣ Save to Local Storage whenever the todo state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo]);

    // 3️⃣ Function to add a new todo
    const addTodo = (newTodo) => {
        setTodo((prevTodos) => {
            const updatedTodos = [...prevTodos, { ...newTodo, id: Date.now() }];
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };

    // 4️⃣ Function to update a todo
    const updateTodo = (id, updatedTodo) => {
        setTodo((prevTodos) => {
            const updatedTodos = prevTodos.map((todo) =>
                todo.id === id ? { ...todo, ...updatedTodo } : todo
            );
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };

    // 5️⃣ Function to complete a todo
    const completeTodo = (id) => {
        setTodo((prevTodos) => {
            const updatedTodos = prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };

    // 6️⃣ Function to delete a todo
    const deleteTodo = (id) => {
        setTodo((prevTodos) => {
            const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
            return updatedTodos;
        });
    };

    return (
        <TodoContext.Provider value={{ todo, addTodo, updateTodo, completeTodo, deleteTodo }}>
            {children} 
        </TodoContext.Provider>
    );
}
