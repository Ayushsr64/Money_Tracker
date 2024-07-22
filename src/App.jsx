import { useState } from 'react'

import './App.css'

function App() {
const [name,setName] = useState('');
const [datetime,setDatetime]=useState('');
const[description,setDescription]=useState('');
function addNewTranscation(){
  

}
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>
        <div className='basic'>
        <input type ="text"
        value={name}
        onChange={ev =>setName(ev.target.value)}
         placeholder={'new one'}></input>
        <input type='datetime-local'
        value={datetime}
        onChange={ev=>setDatetime(ev.target.value)}>
        </input></div>
        <div className='desciption'>
          <input type='text' 
          value={description}
          onChange={ev=>setDescription(ev.target.value)}
          placeholder='descption'></input><br></br>
          <button type='submit'>add new transaction</button>
        </div> </form>
       <div className='transactions'>
          <div className='transaction'>
             <div className="left">
              <div className="name">samsung tv</div>
              <div className="description">it is new tv</div>
             </div>
             <div className="right">
              <div className="price">$500</div>
              <div className="datetime">2033-1-12</div>
             </div>
        </div>
       </div><br></br><br></br>


       <div className='transactions'>
          <div className='transaction'>
             <div className="left">
              <div className="name">lava tv</div>
              <div className="description">it is new tv</div>
             </div>
             <div className="right">
              <div className="price">$500</div>
              <div className="datetime">2033-1-12</div>
             </div>
        </div>
       </div><br></br><br></br>


       <div className='transactions'>
          <div className='transaction'>
             <div className="left">
              <div className="name">redmi</div>
              <div className="description">it is new tv</div>
             </div>
             <div className="right">
              
              <div className="price">$500</div>
              <div className="datetime">2033-1-12</div>
             </div>
        </div>
       </div>
     
      
      
    </main>
  )
}

export default App
