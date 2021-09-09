import { useState } from "react";
import { useTodoContext } from "../context/TodoProvider";

export default function FormInput() {

    const [name, setName] = useState('');
    const [todos,setTodos] = useTodoContext();

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, {name, complete: false, id: Math.random().toFixed(2)}]);
        setName('');
    }

    return (
        <form autoComplete='off' onSubmit={handleSubmitTodo}>
            <input type="text" name='todos' id='todos'
            required placeholder='What need to be done..'
            value={name} onChange={(e) => setName(e.target.value.toLowerCase())} />
            <button type='submit'>Create</button>
        </form>
    )
}
