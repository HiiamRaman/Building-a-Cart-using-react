import { useState , useContext} from 'react'
import Item from './components/Item'
import './App.css'
import { hamrocontext } from './Context(cart)/Cart'
import Incart from './components/Incart'
function App() {
 
const Ramancontext = useContext(hamrocontext);
console.log('ourcontext',Ramancontext);
  return (
    <div>
<h1>Here are the list of items</h1>


      <Item  name="Apple" price={100} />
      <Item  name="Ball" price={500}/>
      <Item  name="phone" price={200} />
      <Item  name="Shoe" price={120} />

     <br /> <br />
     <Incart  />
    </div>
  )
}

export default App
