
import './App.css'
import Card from './Components/card'
function App() {
  let myobj = {
    name : 'sakshi singh',
    age: 24,
  }
 let newarray = [1,2,3,4,7,5,]
  return (
    <>
    
      hello sakshi
      <p className='bg-green-500 rounded-lg p-10 m-20'> reacrt.js</p>
      <Card  channel='sakshi singh' someobj = {myobj} />
      <Card button = 'click'  array ={newarray}/>
    </>
  )
}

export default App
