import React from 'react'
import { CategoryData } from './CategoryData'

const Category = ({setCategory}) => {
  return (
    <div className='flex space-x-5 my-3'>
      {CategoryData.map((value, index,) => (
        <button className=' border p-2 rounded font-bold' key={index} onClick={() => setCategory(value.query)}>{value.title}</button>
      ))}
    </div>
  )
}

export default Category