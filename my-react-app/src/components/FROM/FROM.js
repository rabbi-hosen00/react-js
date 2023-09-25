
import React, { useState } from 'react'
import  style from './form.module.css'

export default function FROM() {

   
    const [user,setUser] = useState({name:'', email: '', password: ''})

     const {name,email,password} = user;


     const handleChange = (e) =>{
        const fileName = e.target.name;
        if (fileName === "name"){
            setUser({ name:e.target.value,email,password});
        } else if (fileName === 'email') {
            setUser({ name,email:e.target.value,password});
        } else if ( fileName === 'password') {
            setUser({ name,email,password:e.target.value});
        }
    };

    const handleSubmit = (e) => {
       console.log("from is summitted")
       console.log(user)
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
                onChange={handleChange}
                required/>
            </div>

            <div className={style.fromGroup}>
               <label htmlFor='email'>Email:</label>
               <input
                type="email" 
                name="email"
                id="email"
                value={email}
                onChange={handleChange} 
                required/>
            </div>

            <div className={style.fromGroup}>
               <label htmlFor='password'> Password:</label>
               <input 
               type="password" 
               name="password" 
               id="password" 
               value={password}
               onChange={handleChange}  
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
