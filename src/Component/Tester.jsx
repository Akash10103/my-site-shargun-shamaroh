import React, { useState } from 'react'

export default function Tester() {
    const [count, setCount] =useState(0)
    const increment = () =>{
 setCount(count + 1)
    }
    const decrement = () =>{
setCount(count - 1)
    }

  return (
    <>
      <div className='text-center'>
        <h1>Counter: {count} </h1>
        <button className='btn btn-primary' onClick={increment}>increment</button>
        <button  className='btn btn-success' onClick={decrement}>decrement</button>

      </div>
    </>
  )
}
