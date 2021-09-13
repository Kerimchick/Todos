import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faEdit, faSave} from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
    const [todos, setTodos] = useState([
        {id : 1, title : "Goin to shop", createdAt : + new Date()},
        {id : 2, title : "Not make at homework", createdAt : + new Date()},
        {id : 3, title : "Nothing not to do", createdAt : + new Date()}
    ])
    const [newTodo, setNewTodo] = useState("")
    const [edit, setEdit] = useState(false)
    const handleChange = (e) => {
      setNewTodo(e.target.value)
    }
    const addTodo = () => {
        const newItem = {
            id : todos.length ? todos[todos.length -1].id + 1 : 1,
            title : newTodo,
            createdAt : + new Date()
        }
        setTodos([...todos, newItem])
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(el => el.id !== id))
    }
    return (
        <div className="row offset-md-3 my-5">
            <div className="col-md-6">
                <div className="d-flex mb-4">
                    <input type="text" className="form-control me-3" onChange={handleChange}/>
                    <button type="button" className="btn btn-primary" onClick={addTodo} disabled={!newTodo.trim()}>Add</button>
                </div>
                <ul className="list-group">
                    {
                        todos.map(item =>
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                {
                                    edit ? <input type="text" defaultValue={item.title}/> : <span>{item.title}</span>
                                }
                                <div>
                                    <button type="button" className="btn btn-warning me-2 btn-sm text-white" onClick={() => setEdit(!edit)}>
                                        {
                                            edit ? <FontAwesomeIcon icon={faSave} /> : <FontAwesomeIcon icon={faEdit} />
                                        }
                                    </button>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteTodo(item.id)}><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Todo;