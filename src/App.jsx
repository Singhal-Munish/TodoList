import react, { useState } from 'react'
import Container from "react-bootstrap/Container";
import TodoList from './Components/TodoList';
import Objects from './Components/Objects';
import TodoMultiple from './Components/TodoMultiple';
import TodoMultipleCopy from './Components/TodoMultiple';
import Gadgets from '../../Reducer/src/Components/Gadgets';

const App = () => {
  return (
    <Container>
      <TodoMultiple />
      {/* <Gadgets /> */}
      {/* <TodoMultipleCopy /> */}
    </Container>
  )
}

export default App
