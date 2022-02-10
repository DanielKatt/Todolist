import React from 'react';
import './App.scss';
import Container from './Components/Container'
import TaskList from "./Components/TaskList";
import FormTodo from "./Components/Formtodo";
import Checkbox from "./Components/Checkbox";


function App() {
  return (
    <div className="App">
      <Container/>
      <FormTodo />
      <TaskList />
      <Checkbox />
    </div>
  );
}

export default App;
