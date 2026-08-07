// import React from 'react'

// const App = () => {

//   function handleClick(){
//     alert('button clicked')
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   )
// }

// export default App

//example 2

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [isFollowed , setisFollowed] = useState(false)

//   return (

    

//     <div>
//       <button onClick={ ()=> setisFollowed(!isFollowed)}>{isFollowed ? "Following":"Follow"}</button>
      
//     </div>
//   )
// }

// export default App

//example 3

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [text , setText ] = useState("")
//   return (
//     <div>
//       <input
//       placeholder='Search...'
//       onChange={ (e)=> (e.target.value)}

//       />

//       <h3>you Typed : {text} </h3>
      
//     </div>
//   )
// }

// export default App

//example 4

import { useState } from "react";

import React from 'react'

const App = () => {
  const [color , setColor ] = useState("white") 
  return (
    <div style={{backgroundColor:color , height:'100vh'}}>
      <button onClick={()=>setColor("red")}>Red</button>
      <button onClick={()=>setColor("blue")}>Blue</button>
      <button onClick={()=>setColor("green")}>Green</button>
    </div>
  )
}

export default App



