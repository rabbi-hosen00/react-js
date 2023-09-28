import React from 'react'

import './index.css'
import Todo from './todo'
import NewTodo from './NewTodo'

const App = () => {

 const handleNewTodo = (newTodo) => {
    console.log(newTodo)
 }



  return (
    <div>
      <NewTodo onHandleNewTodo={handleNewTodo}/>
      <Todo title="learn react.js" />
    </div>
  )
}

export default App
