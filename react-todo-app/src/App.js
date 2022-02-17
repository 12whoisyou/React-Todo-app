import React, { useState } from 'react';

import './App.css';

//Importing components
import Form from "./components/Form"
import TodoList from "./components/TodoList"


function App() {
  //This use state is what makes React great
  //The set todos and todos is actualyy diffrent
  //setTodos is a function and todos is to get
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  
  return (
    <div className="todo-app">
      <header>
        <h1>Todo App </h1>
      </header>
        <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
        <TodoList inputText={inputText} todos={todos} />

    </div>
  );
}

export default App;
