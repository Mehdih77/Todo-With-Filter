import {useTodoContext} from "../context/TodoProvider";
import ListItem from "./ListItem";

export default function List() {

    const [todos,setTodos] = useTodoContext();

    // for checking complete, true OR false
    const checkComplete = (id) => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete
            }
        });
        setTodos(newTodos);
    }

    // for updating todo
    const handleEditTodo = (id, editedValue) => {
        const newTodos = [...todos];
        newTodos.forEach(todo => {
            if (todo.id === id) {
                todo.name = editedValue
            }
        })
        setTodos(newTodos);
    }

    return (
        <ul>
            {todos.map(todo => (
                <ListItem 
                    todo={todo} 
                    id={todo.id}
                    key={todo.id} 
                    checkComplete={checkComplete}
                    handleEditTodo={handleEditTodo}
            />))}
        </ul>
    )
}
