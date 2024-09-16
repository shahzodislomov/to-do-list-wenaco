import { IoClose } from 'react-icons/io5'
import Modal from 'react-modal'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../redux/slice/slice'

const EditModal = ({ isOpen, id, onClose, currentTask }) => {
  const [newValue, setNewValue] = useState('')
  const dispatch = useDispatch()
  const handleChange = e => {
    setNewValue(e.target.value)
  }
  const handleSave = () => {
    if (currentTask) {
      dispatch(editTodo({ id: id, newTitle: newValue }))
      onClose()
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className='fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.7)]'
    >
      <div className='bg-gray-900 text-white rounded-lg p-6 shadow-lg max-w-lg w-full relative'>
        <button
          onClick={onClose}
          className='absolute top-2 right-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none'
        >
          <IoClose size={24} color='#fff' />
        </button>
        <h2 className='text-xl font-semibold mb-4'>Update Your Task</h2>
        <input
          type='text'
          defaultValue={currentTask}
          onChange={e => handleChange(e)}
          className='w-full p-2 border border-gray-600 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Enter new task details'
        />
        <div className='mt-4 flex gap-2'>
          <button
            onClick={() => {
              handleSave()
            }}
            className='bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 focus:outline-none'
          >
            Save
          </button>
          <button
            onClick={onClose}
            className='bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-500 focus:outline-none'
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default EditModal




// import { IoClose } from 'react-icons/io5';
// import Modal from 'react-modal';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { editTodo } from '../redux/slice/slice';

// const EditModal = ({ isOpen, onClose, currentTask }) => {
//   const [newValue, setNewValue] = useState('')
//   const dispatch = useDispatch()
//   const handleChange = (e) => {
//     setNewValue(e.target.value)
//   }
//   const handleSave = () => {
//     if (currentTask) {
//       dispatch(editTodo({id: id, newTitle: newValue}))
//       onClose();
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onClose}
//       ariaHideApp={false}
//       className="fixed inset-0 flex items-center justify-center z-50 bg-[rgba(0,0,0,0.7)]"
//     >
//       <div className="bg-gray-900 text-white rounded-lg p-6 shadow-lg max-w-lg w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 p-2 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none"
//         >
//           <IoClose size={24} color="#fff" />
//         </button>
//         <h2 className="text-xl font-semibold mb-4">Update Your Task</h2>
//         <input
//           type="text"
//           defaultValue={currentTask}
//           onChange={(e) => handleChange(e)}
//           className="w-full p-2 border border-gray-600 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Enter new task details"
//         />
//         <div className="mt-4 flex gap-2">
//           <button
//             onClick={() => handleSave}
//             className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 focus:outline-none"
//           >
//             Save
//           </button>
//           <button
//             onClick={onClose}
//             className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-500 focus:outline-none"
//           >
//             Cancel
//           </button>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default EditModal;
