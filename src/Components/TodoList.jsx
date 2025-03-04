import React, { useState } from "react";
import Container from "react-bootstrap/Container";

const TodoList = () => {
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [isEditing, setIsEditing] = useState(false)
    const [currentTodo, setCurrentTodo] = useState({})
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if (todo !== '') {
        setTodoList([
          ...todoList, // Spread Operator
          { // Object
            id: todoList.length+1,
            text: todo,
          },
        ])
        setTodo('');
      }           
      else {
          setTodo('');
        }
    }
    const handleInputChange = (e) => {
      setTodo(e.target.value);
    }
    const handleEditInputChange = (e) => {
      setCurrentTodo({...currentTodo, text:e.target.value});
    }
    const handleEdit = (todo) => {
      setIsEditing(true);
      setCurrentTodo({...todo});
      // console.log({...todo});
    }
    const handleUpdate = (e) => {
      e.preventDefault();
      handleUpdateTodo(currentTodo.id, currentTodo);
    }
    const handleUpdateTodo = (id, updateTodo) => {
      const updatedItem = todoList.map((todo=>{
        return todo.id==id? updateTodo:todo
      }))
      // console.log(updateTodo)
      setIsEditing(false);
      setTodoList(updatedItem);
    }
    
    return (
      <Container className='mt-3' style={{ width: '50%' }}>
        <h3 className='my-3 text-center bg-dark text-light p-2'>To Do App</h3>
      {
        isEditing ? (
          <form onSubmit={handleUpdate}>
          <div>
            <input className='form-control' type='text' name='editInput' value={currentTodo.text}
              placeholder='Enter a task to Add to ToDo List' onChange={handleEditInputChange}>
            </input>
          </div>
          <div>
            <button className='my-2 btn btn-primary' type='submit'>
              Update
            </button>
            <button className='my-2 mx-4 btn btn-outline-secondary' type='submit' onClick={()=> setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
        ):
        (
          <form onSubmit={handleSubmit}>
          <div>
            <input className='form-control' type='text' name='todoList' value={todo}
              placeholder='Enter a task to Add to ToDo List' onChange={handleInputChange}>
            </input>
          </div>
          <div>
            <button className='my-2 btn btn-primary' type='submit'>
              Submit
            </button>
          </div>
        </form>
        )
      }

      <div className='mt-3'>
        <ol>
          {
            todoList.map((displayList) => {
              return (
                <div className='' key={displayList.id}>
                  <li className='mx-3 my-3' >{displayList.text}
                  <button className='mx-2 btn btn-primary' onClick={()=> handleEdit(displayList)}>
                    Edit
                  </button>
                  <button className='mx-2 btn btn-danger' onClick={() => setTodoList(
                      todoList.filter(del => del.id !== displayList.id)
                  )}>
                    Delete
                  </button>
                  </li>
                </div>
              );
            })
          }
        </ol>
      </div>
      </Container>
    );
  };
  
  export default TodoList
  