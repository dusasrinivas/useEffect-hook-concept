import {useState, useEffect} from 'react'




const App=()=>{
  const [score, setScore]= useState(0)
   useEffect(()=>{ 
    document.title=`score: ${score}`
   })
   
const onIncrement=()=>{
  setScore(prevScore=>prevScore+1)
  
}

 
const onDecrement=()=>{
  setScore(prevScore=>prevScore-1)
}
 
return (
  <>
  <p>
     {score}
  </p>
  <button type="button" onClick={onIncrement}>
    Increment
    
  </button>
  <button type="button" onClick={onDecrement}>
    Decrement
    
  </button>
  
  </>
)

}

export default App
