import { useState, useRef, useEffect } from "react";
import { useTodoContext } from "../context/TodoProvider";

export default function FormInput() {

    const [name, setName] = useState('');
    const [todos,setTodos] = useTodoContext();

    // for focusing to the input
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const handleSubmitTodo = (e) => {
        e.preventDefault();
        setTodos([...todos, {name, complete: false, id: Math.random().toFixed(2)}]);
        setName('');
        inputRef.current.focus();
    }

    return (
        <form autoComplete='off' onSubmit={handleSubmitTodo}>
            <input type="text" name='todos' id='todos'
            required
            placeholder='What need to be done..'
            ref={inputRef}
            value={name}
            onChange={(e) => setName(e.target.value.toLowerCase())} />
            <button type='submit'>Create</button>
        </form>
    )
}
