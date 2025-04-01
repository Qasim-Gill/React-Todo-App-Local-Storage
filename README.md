# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


Here's a well-structured **README.md** for your project:  

---

# **Todo App (React + Context API)**  

This is a simple **Todo App** built using **React** and **Context API** for state management. It allows users to **add, update, complete, and delete todos** while maintaining state persistence in local storage.

---

## **🛠️ Technologies Used**  
- **React** (Functional Components + Hooks)  
- **Context API** (for global state management)  
- **Local Storage** (for state persistence)  
- **Tailwind CSS** (for styling)  

---

## **📂 Project Structure**
```
/todo-app
 ├── /src
 │   ├── /components
 │   │   ├── FormInput.jsx  # Input form to add todos
 │   │   ├── TodoItem.jsx   # Individual todo item component
 │   ├── /context
 │   │   ├── TodoContext.jsx # Manages global todo state
 │   ├── App.jsx           # Main application file
 │   ├── index.jsx         # Entry point of the app
 ├── /public
 ├── package.json         # Dependencies and scripts
 ├── README.md            # Project documentation
```

---

## **🚀 How to Run the Project**  

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/todo-app.git
cd todo-app
```

### **2️⃣ Install Dependencies**  
Make sure you have **Node.js** installed, then run:  
```bash
npm install
```

### **3️⃣ Start the Development Server**  
```bash
npm run dev
```
This will start the app at **http://localhost:5173/** (if using Vite).  

---

## **📝 Features**
✅ Add new todos  
✅ Edit existing todos  
✅ Mark todos as complete  
✅ Delete todos  
✅ Persist state using **local storage**  

---

## **🛠️ How It Works**  

### **Global State Management**
- Uses **Context API** (`TodoContext.jsx`) to store and manage todos across components.  
- The provider wraps the entire app to give access to state and functions.  

### **Local Storage Integration**
- On every change, todos are saved to **local storage**.  
- When the app reloads, it fetches saved todos from local storage.  

```jsx
useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
}, [todo]);

useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) setTodo(savedTodos);
}, []);
```

---

## **📌 Next Steps / Improvements**
- ✅ Add filters (completed, pending todos)  
- ✅ Improve UI with animations  
- 🔜 Connect to a backend API  

---

## **📜 License**
This project is **MIT licensed**. Feel free to use and modify it! 🚀  

---

Let me know if you need modifications! 😊
