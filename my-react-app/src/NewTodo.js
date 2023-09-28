import React from 'react'

const NewTodo = (props) => {
    props.onHandleNewTodo({ title: 'I am new todo'});
  return (
    <div>
      <p> new toto</p>
    </div>
  )
}

export default NewTodo;
