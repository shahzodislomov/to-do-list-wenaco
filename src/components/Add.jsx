import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/slice/slice'

const Add = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const onAddTodo = () => {
    console.log(value)
    dispatch(addTodo(value))
    setValue('')
  }
  return (
    <>
      <h1 className='text-6xl font-bold my-16 bg-gradient-to-tr from-sky-600 to-sky-300 bg-clip-text text-transparent'>To-Do List</h1>
      <div className='flex space-x-5'>
        <input className='outline-sky-400 py-2 px-3 border rounded bg-transparent  font-bold' placeholder='Enter Your Task' value={value} onChange={(e)=> setValue(e.target.value)}/>
        <button className='bg-sky-300 rounded px-8 py-3 font-semibold' onClick={onAddTodo}>Add</button>
      </div>
    </>
  )
}

export default Add