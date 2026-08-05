// // // import React from "react";


// // // function App(){

// // //   let count = 0

// // //   function increase(){
// // //     count = count + 1;
// // //     console.log(count)
// // //   }
// // //   return(
// // //     <div>
// // //       <h2>count/cart :{count}</h2>
// // //       <button onClick={increase}>Click me</button>
// // //     </div>
// // //   )
// // // }
// // // export default App

// // //example 2

// // import { useState } from "react";


// // function App(){

// //   // const [MainvarianbleName , setVariableName] = useState(Initial Value)

// //   const [count, setCount] = useState(0)

// //   function increase() {
// //          setCount(count + 1)
// //          console.log(count)
// //   }

// //   return(
// //     <div>
// //       <h2>count/cart : {count}</h2>
// //       <button onClick={increase}>Click me</button>

// //     </div>
// //   )
// // }


// //example - instagram likes

// import { useState } from "react";


// function App(){

//   const [likes , setLike] = useState(44)
//   function increaseLike(){
//     setLike(likes + 1)
//   }
//   return(
//     <div>
//       <h3>Likes :</h3>
//       <button onClick={increaseLike}>Like</button>
//     </div>
//   )


// }
// export default App


//example - hide/show password

import { useState } from "react";

function App(){
  const [show, setShow] = useState(false)

  return(
    <div>
      <input type={show ? "text" : "password"} placeholder="Enter your password" />
      <button onClick={()=>setShow(!show)}>Show/Hide</button>
    </div>
  )

}
export default App
