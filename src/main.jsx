import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TodoContextProvider } from './context/TodoContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the App component with TodoContextProvider */}
    {/* This will provide the todo context to all components within App */}
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </StrictMode>,
)
