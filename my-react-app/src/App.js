import React from 'react'

import Child from './components/STATE_LIFTING/Child'



export default function app() {
  const data = "i am from parent(app)"
  

    const handleChildData = (childData) =>{
        console.log(childData)
    }

  return (
    <div>
      <Child  data={data} onChildData={handleChildData}/>
    </div>
  )
}

