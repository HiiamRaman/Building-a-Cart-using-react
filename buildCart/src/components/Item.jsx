import React from 'react'
import { useContext } from 'react'
import { hamrocontext } from '../Context(cart)/Cart'
function Item(props) {
  const Ramancontext = useContext(hamrocontext)

  function handler (){
       Ramancontext.setItem([...Ramancontext.item,{ name: props.name, price: props.price }])
  }
  return (
    <div>
      <h1>{props.name}</h1>
      <p>price is NPR : {props.price}</p>
 <button onClick={handler}>Add to Cart</button>
       

      

</div>

  )
}

export default Item
