// import {BrowserRouter , Routes , Route } from 'react-router-dom'

// function Home(){
//   return <h1>Home Page</h1>

// }

// function About(){
//   return <h1>ABout</h1>

// }

// function App(){

//   return(
//     <BrowserRouter>
    

//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={<Home/>}/>


    
//     </BrowserRouter>
//   )
// }

// export default App;

//example 2- with navigation

// import {BrowserRouter , Routes , Route, Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

// function Home(){
//   return <h1>Product Page</h1>

// }

// function Dashboard(){
//   return <h1>Welcome</h1>
// }

// function Login(){
//   navigate('/dashboard')
// }

// function Cart(){
//   return <h1>Cart</h1>

// }

// function App(){
//   const navigate = useNavigate()

//   return(
//     <BrowserRouter>

//     <nav>
//       <Link to="/">Home</Link>
//       <Link to="/cart">Cart</Link>
//     </nav>

//     <Routes>
    

//       <Route path="/" element={<Home/>}/>
//       <Route path="/cart" element={<cart/>}/>
//       <Route path="/dashboard" element={<Dashboard/>}/>

//       </Routes>

//       <button onClick={Login}>Login</button>


    
//     </BrowserRouter>
//   )
// }

// export default App;

//usenavigate() Hooks

//example 3

import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from "./Login";
import Home from "./Home";

function App(){
  return(
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
    </Routes>
    


    </BrowserRouter>
  )
}

export default App