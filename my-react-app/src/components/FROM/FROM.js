import React, { useState } from 'react'
import  style from './form.module.css'

export default function FROM() {

    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleNameChange = (e) =>{
        setName(e.target.value)
    }
    const handleEmailChange = (e) =>{
       setEmail(e.target.value)
    }
    const handlPasswordeChange = (e) =>{
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
       console.log("from is summitted")
       let userInfo = {
        name,
        email,
        password,
       };
       console.log(userInfo)
       e.preventDefault();
    }

  return (
    <div>
      <h1>
        <form action='' onSubmit={handleSubmit}>
            <div className={style.fromGroup}>
               <label htmlFor='name'>name:</label>
               <input 
               type="text"
                name="name" 
                id="name"
                value={name}
                onChange={handleNameChange}
                required/>
            </div>

            <div className={style.fromGroup}>
               <label htmlFor='email'>Email:</label>
               <input
                type="email" 
                name="email"
                id="email"
                value={email}
                onChange={handleEmailChange} 
                required/>
            </div>

            <div className={style.fromGroup}>
               <label htmlFor='password'> Password:</label>
               <input 
               type="password" 
               name="password" 
               id="password" 
               value={password}
               onChange={handlPasswordeChange}  
               required/>
            </div>

            <div className={style.fromGroup}>
                <button type='submit'>Rrgister</button>
            </div>
        </form>
      </h1>
    </div>
  )
}
