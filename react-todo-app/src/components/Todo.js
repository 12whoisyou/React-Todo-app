import React from 'react'

function Todo({text, todo, todos, setTodos}) {

  //Events
  const deleteHandler = () => {
    //Runs through all objects and includes or don't include them
    setTodos(Object.values(todos).filter((el) => el.id !== todo.id))
  }
  const completeHandler = () => {
    //Runs through all objects and checks if they have that id of the complete one to update it
    setTodos(todos.map((item) => {
      if(item.id == todo.id){
        //Using suqgly lines so we are allowed to use ":" in complete
        return {
          ...item, completed: !item.completed
        } 
      }
        return(item)
    }))
  }
  
  return (
    <div className="todo">
      {/* 
      This mess will add the class completed if completed is true
      The question mark checks if it's true and gives complete and if false gives ''
      */}
      <li className={`todo-item ${todo.completed ? "completed": ''}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
      <i className="fas fa-check"></i>
      </button>
      
      <button onClick={deleteHandler} className="trash-btn">
      <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default Todo