import { useState } from "react"

export default function ListItem({todo, id,checkComplete,handleEditTodo}) {

    const [editing, setEditing] = useState(false);
    const [editValue, setEditValue] = useState(todo.name);

    const handleOnEdit = () => {
        setEditing(true);
    }

    const handleOnSave = (id) => {
        setEditing(false);
        if (editValue) {
            handleEditTodo(id, editValue)
        } else{
            setEditValue(todo.name)
        }
    }

    return (
        <>
        {editing ? 
            <li>
                    <input type="text"
                    name='editValue'
                    id={id}
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value.toLowerCase())}
                    />
                <button onClick={() => handleOnSave(id)}>Save</button>
            </li> 
        :
            <li>
                 <label htmlFor={id} className={todo.complete ? "active" : ""}>
                    <input type="checkbox" 
                    checked={todo.complete} 
                    id={id}
                    onChange={() => checkComplete(id)}
                    />
                {todo.name}
                </label>
                <button onClick={handleOnEdit} disabled={todo.complete}>Edit</button>
            </li>
        }
        </>
    )
}
