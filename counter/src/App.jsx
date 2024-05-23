import { useState } from 'react';



function Counter(){
  const [counter, setCounter] = useState(5);
  const addValue = ()=>{
    setCounter(counter+1)
  }
  const removevalue = () =>{
    setCounter(counter-1)
  }
  return(
    <div>
      <p>Counter value : {counter}</p>
      <button onClick={addValue}>add value</button>
      <br />
      <br />
      <button onClick={removevalue}>remove value</button>
    </div>
  )
}

export default Counter;