import { useDispatch } from 'react-redux'
import Add from './components/Add'
import Category from './components/Category'
import ToDoList from './components/ToDoList'
import { deleteAll } from './redux/slice/slice'
import { useState } from 'react'
import { FaMoon, FaSun } from "react-icons/fa";


function App() {
  const [handleDarkTheme, setHandleDarkTheme] = useState(false)
  const dispatch = useDispatch()
  const [category,setCategory] = useState('all')

  const handleDelete = () => {
    dispatch(deleteAll())
  }
  return ( 
    <div className={`relative ${!handleDarkTheme ? 'bg-slate-800 text-white' : 'bg-white text-black'}  h-screen w-screen flex items-center flex-col pt-24 overflow-scroll`}>
      <div className='absolute top-10 right-10 text-3xl'>
        {handleDarkTheme ? (
          <FaMoon onClick={() => setHandleDarkTheme(false)}/>
        ): 
        <FaSun className='' onClick={() => setHandleDarkTheme(true)}/>
      }
      </div>
      <Add />
      <Category setCategory={setCategory}/>
      <ToDoList category={category}/>
      <div>
        <button className='rounded border px-4 py-3 my-10 font-bold text-slate-900' onClick={()=>handleDelete()}>Delete Tasks</button>
      </div>
    </div>
  )
}

export default App
