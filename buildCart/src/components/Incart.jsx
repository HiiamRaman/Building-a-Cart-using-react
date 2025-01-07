import React from 'react'
import { useContext } from 'react'
import { hamrocontext } from '../Context(cart)/Cart'

function Incart() {

    const Ramancontext = useContext(hamrocontext);
   
        const total = Ramancontext.item.reduce((a,b)=>a+b.price,0)
        

  return (
    <div>
         <h1>INSIDE CART</h1>
         {
        Ramancontext&&Ramancontext.item.map((item,id )=>( 

            <li key={id}>
                {item.name } {item.price}
            </li>
        )
        )
    }
         <h1>Total amount is {total}</h1>
       
    </div>
  )
}

export default Incart
