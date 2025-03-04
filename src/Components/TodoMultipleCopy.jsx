import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TodoMultipleCopy = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [isEditing, setIsEditing] = useState(false)
    const [currentTodo, setCurrentTodo] = useState({})
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name !== '' && mobile != '') {
        setTodoList([
          ...todoList, // Spread Operator
          { // Object
          id: todoList.length+1,
          Name: name,
          Mobile: mobile,
          },
        ])
        setName('');
        setMobile('');
      }           
      else {
          setName('');
          setMobile('');
        }
    }
    const handleNameInputChange = (e) => {
      setName(e.target.value);
    }
    const handleMobileInputChange = (e) => {
      setMobile(e.target.value);
    }
    const handleEdit = (editTodo) => {
      setIsEditing(true);
      setCurrentTodo({...editTodo});
    }
    const handleEditNameInputChange = (e) => {
      setCurrentTodo({...currentTodo, Name:e.target.value});
    }
    const handleEditMobileInputChange = (e) => {
      setCurrentTodo({...currentTodo, Mobile:e.target.value});
    }
    const handleUpdate = (e) => {
      e.preventDefault();
      handleUpdateTodo(currentTodo.id, currentTodo);
    }
    const handleUpdateTodo = (id, updateTodo) => {
      const updatedItem = todoList.map((todo=>{
        return (todo.id==id? updateTodo: todo
        )
      }))
      setIsEditing(false);
      setTodoList(updatedItem);
    }
    
    return (
      <Container className='mt-3' style={{ width: '100%' }}>
        <h3 className='my-3 text-center bg-dark text-light p-2'>To Do App</h3>
      {
        isEditing ? (
          <form onSubmit={handleUpdate}>
          <div>
            <input className='form-control my-4' type='text' name='name' value={currentTodo.Name}
              placeholder='Enter your Full Name' onChange={handleEditNameInputChange}>
            </input>
            <input className='form-control my-4' type='number' name='mobile' value={currentTodo.Mobile}
              placeholder='Enter your Mobile no.' onChange={handleEditMobileInputChange}>
            </input>            
          </div>
          <div>
            <button className='mb-3 btn btn-primary' type='submit'>
              Update
            </button>
            <button className='mb-3 mx-4 btn btn-outline-secondary' type='submit' onClick={()=> setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
        ):
        (
          <form onSubmit={handleSubmit}>
          <div>
            <input className='form-control my-4' type='text' name='todoList' value={name}
              placeholder='Enter your Full Name' onChange={handleNameInputChange}>
            </input>
            <input className='form-control my-4' type='text' name='mobile' value={mobile}
              placeholder='Enter your Mobile no.' onChange={handleMobileInputChange}>
            </input>
          </div>
          <div>
            <button className='mb-3 btn btn-primary' type='submit'>
              Submit
            </button>
          </div>
        </form>
        )
      }
        <Row className='bg-secondary text-white'>
            <Col xs={1} className='border border-dark text-center fs-6 py-1'>ID</Col>
            <Col xs={4} className='border border-dark text-center fs-6 py-1'>Name</Col>
            <Col xs={3} className='border border-dark text-center fs-6 py-1'>Contact</Col>
            <Col xs={2} className='border border-dark text-center fs-6 py-1'>Edit</Col>
            <Col xs={2} className='border border-dark text-center fs-6 py-1'>Delete</Col>
        </Row>
      
        <div>
        {
          todoList.map((displayList) => {
            return (                 
                <Row key={displayList.id}>
                    <Col xs={1} className='border border-dark text-center fs-6 py-1'>
                        { displayList.id }                       
                    </Col>   
                    <Col xs={4} className='border border-dark text-center fs-6 py-1'> 
                        { displayList.Name }                       
                    </Col>   
                    <Col xs={3} className='border border-dark text-center fs-6  py-1'>
                        { displayList.Mobile }                        
                    </Col>   
                    <Col xs={2} className='border border-dark text-center py-1'>
                        <button className='mx-2 btn btn-primary' onClick={()=> handleEdit(displayList)}>
                            Edit
                        </button>
                    </Col>
                    <Col xs={2} className='border border-dark text-center py-1'>
                        <button className='mx-2 btn btn-outline-danger' onClick={() => setTodoList(
                          todoList.filter(del => del.id !== displayList.id))}>
                            Delete
                        </button>
                    </Col>
                </Row>
            )
          })
        }  
        </div>
    </Container>
    );
}

export default TodoMultipleCopy