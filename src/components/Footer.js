import { useState } from "react"
import { useTodoContext } from "../context/TodoProvider";

export default function Footer() {

    const [completeAll, setCompleteAll] = useState(false);
    const [todos,setTodos] = useTodoContext();

    // complete All todos with One click
    const handleCompleteAll = () => {
        setCompleteAll(!completeAll);
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            todo.complete = !completeAll
        })
        setTodos(newTodos);
    }

    const handleDeleteTodo = () => {
        const newTodos = todos.filter(todo => {
            return todo.complete === false
        })
        setTodos(newTodos);
        setCompleteAll(false);
    }

    const remainTodo = () => {
        return todos.filter(todo => todo.complete === false)
    }

    return (
        <footer className="row">
            {todos.length === 0 ? 
                <h2>Nothing To Do</h2>
                 : 
                <>
                <label htmlFor="all">
                    <input type="checkbox" name="all" id="all"
                    onChange={handleCompleteAll}
                    checked={completeAll} />
                        All
                </label>
                <p>You have {remainTodo().length} to do</p>
                <button onClick={handleDeleteTodo} id="delete">Delete</button>
                </>
            }
        </footer>
    )
}
