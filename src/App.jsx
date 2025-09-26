import { useState } from "react"
import Button from "./components/Button"

function App()
{
  const [count,setCount]=useState(0);
 
  return(
  
    <>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center",  backgroundColor:"grey"}}>
        <div>
        <h1 style={{textAlign:"center", fontSize:"8rem",color:"pink"}}>Counter App</h1>
        <p style={{fontSize:"4rem",textAlign:"center"}}>Count:{count}</p>
        <div >
          <Button label="Increment" onClick={()=>{
            setCount(count+1)
          }}/>
          <Button label="Decrement" onClick={()=>{
            setCount(count-1)
          }}/>
          <Button label="Reset" onClick={()=>{
            setCount(0)
          }}/>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default App