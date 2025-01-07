import React, { useState } from 'react'
import { createContext } from 'react'
export  const hamrocontext  = createContext(null)
 
export  function Cart(props) {
  const[item,setItem]=useState([])
  return (
    <div>
      <hamrocontext.Provider value={{item,setItem}}>
      {props.children}
      </hamrocontext.Provider>

      
    </div>
  )
}


