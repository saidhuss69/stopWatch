import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react' 
function App() {
  //Keeps track of second
  const [second, setSecond] = useState(0)
  //change to false when reset clicked
  const [isActive, setIsactive] = useState(false)
  function Toggle(){
       setIsactive(!isActive)
  }
  function Reset(){
    setSecond(0)
    setIsactive(false)
  } 
  useEffect(() => {
    let myInterval = null
    if(isActive){
      //add one every second
      myInterval = setInterval(() => {
        setSecond(second => second + 1)
      }, 1000)
    }
    else if(!isActive && second !== 0){
      clearInterval(myInterval)
    }
    return () => clearInterval(myInterval)
  }, [isActive, second])
  return (
    
    <div className="App">
      <div className="Time">
          {second}s  
      </div>  
      <div className='row'>
        <button type='button' className='' onClick={Toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button type='button' className='' onClick={Reset}>
          Reset
        </button>
      </div>
    
    </div>
  );
}

export default App;
