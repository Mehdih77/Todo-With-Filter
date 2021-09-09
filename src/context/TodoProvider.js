import { useState, useEffect, createContext, useContext } from "react";

const todoContext = createContext();

export const useTodoContext = () => {
    const context = useContext(todoContext);
    if (!context) {
        throw Error("Error in todoContext")
    }
    return context;
}

export default function TodoProvider({children}) {

    const [todos, setTodos] = useState([]);

    // localStorage
    useEffect(() => {
        const getTodos = JSON.parse(localStorage.getItem('todos'));
        if (getTodos) {
            setTodos(getTodos);
        }
    }, [])
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <todoContext.Provider value={[todos,setTodos]}>
            {children}
        </todoContext.Provider>
    )
}
