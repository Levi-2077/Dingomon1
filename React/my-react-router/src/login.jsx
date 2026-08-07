import React from 'react'
import {useNavigate} from 'react-router-dom'

const login = () => {

    const navigate = useNavigate()

    function HandleLogin(){
        alert('Login successful')

        navigate('/home')
    }
  return (
    <div>
      <h1>Login page</h1>

      <button onClick={HandleLogin}>Login</button>
    </div>
  )
}

export default login
