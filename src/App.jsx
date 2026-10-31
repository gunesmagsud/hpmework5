import { useState } from 'react'
import './App.css'

function App() {
  let siyahi = ["Rock", "Paper","Scissors"]
  const [num, setNum] = useState("Rock")
  let robot = siyahi[Math.floor(Math.random() * 3)]
  let n;

  if(robot === num){
    n = "Beraber!!"
  } else if(
    (num === "Rock" && robot === "Scissors") ||
    (num === "Paper" && robot === "Rock") ||
    (num === "Scissors" && robot === "Paper") 

  ){
    n = "Sen qalib geldin!!!"
  } else{
    n = "Robot qalib geldi!"
  }

  return (
    <>
   <h1>Birini sec!!</h1>
<h2>
  <button onClick={() => setNum("Rock")}>Rock</button>

  <button onClick={() => setNum("Paper")}>Paper</button>
  
  <button onClick={() => setNum("Scissors")}>Scissors</button>
</h2>
 <h3>Robot {robot} secdi Sen {num} secdin {n}</h3>
    </>
  )
}

export default App
