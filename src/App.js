import React, { useState } from 'react'

const App = () =>{

  // const name = 'World'
  const [count, setCount] = useState(0)
  const [user, setUser] = useState('')

  const increment = () =>{
    setCount(count + 1) 
  }

  const handleOnChange = (e) => {
    // console.log("e: ", e.target.value)
    setUser(e.target.value)
  }

  console.log("user: ", user)

  return (
    <React.Fragment>
      <div>Count: {count}</div>
      <button id="increment" onClick={increment}>Increment</button>
      <br />
      <input name="user" onChange={handleOnChange} value={user}/>

    </React.Fragment>
  
  )
}

export default App