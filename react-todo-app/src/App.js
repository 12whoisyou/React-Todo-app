import React, { useState, useEffect } from 'react';

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
  const [status, setStatus] = useState([])
  const [filteredTodos, setFilteredTodos] = useState([])

  
  //Functions and events
  const filterHandler = () => {
    switch(status){
      case("completed"):
      setFilteredTodos(todos.filter(todo=> todo.completed === true))
      break

      case("uncompleted"):
      setFilteredTodos(todos.filter(todo=> todo.completed === false))
      break

      default:
      setFilteredTodos(todos)
      break  
    }
  }

  const saveLocalTodos = () =>{
    localStorage.setItem("todos", JSON.stringify(todos)) 
  }

  const loadLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([])) 
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal)
    }
  }

  //USE EFFEct is for when we change a state
  //Empty brackets will only run on the start
  //First argument is function second is array of states

  //Runs once when the app start, putting it first means that we load before we save
  useEffect(()=>{
    loadLocalTodos()
  }, [])

  useEffect(()=>{
    filterHandler()
    saveLocalTodos()
  }, [todos,status])



  /*
  useEffect(()=>{
    console.log("Hey")
  }, [todos,status])
  */

//If you get an error unfefiened than you porbably past to the wrong function
  return (
    <div className="todo-app">
      <header>
        <h1>Todo App </h1>
      </header>
        <Form setStatus={setStatus} inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
        <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>

    </div>
  );
}

export default App;
