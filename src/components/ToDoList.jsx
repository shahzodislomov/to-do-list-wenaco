import React, { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FaEdit } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, handleCompleate } from '../redux/slice/slice';
import EditModal from './EditModal';

const ToDoList = ({ category }) => {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);
  const [currentEditId, setCurrentEditId] = useState(null);
  const todos = useSelector((state) => state.todo);
  const [filtered, setFiltered] = useState(todos);

  const dispatch = useDispatch();

  useEffect(() => {
    if (category === 'all') {
      setFiltered(todos);
    } else if (category === 'progress') {
      setFiltered(todos.filter((todo) => !todo.compleated));
    } else if (category === 'completed') {
      setFiltered(todos.filter((todo) => todo.compleated));
    }
  }, [todos, category]);

  return (
    <>
      {filtered.map((item, idx) => (
        <div
          className={`flex justify-between min-w-96 rounded-xl my-5 border-2 px-5 py-4 ${
            item.compleated ? 'bg-gray-400' : ''
          }`}
          key={idx}
        >
          <div className='flex items-center space-x-5  font-semibold'>
            <input
              type='checkbox'
              checked={item.compleated}
              onChange={() => dispatch(handleCompleate(item.id))}
            />
            <p className={item.compleated ? 'line-through' : ''}>
              {item.title}
            </p>
          </div>
          <div className='flex justify-between space-x-5'>
            <button
              className='text-white rounded-[50%] bg-slate-600 p-3'
              onClick={() => dispatch(deleteTodo(item.id))}
            >
              <RiDeleteBin5Line />
            </button>
            {!item.compleated && (
              <button
                className='text-white rounded-[50%] bg-slate-600 p-3'
                onClick={() => {
                  setIsOpenEditModal(true);
                  setCurrentEditId(item.id);
                }}
              >
                <FaEdit />
              </button>
            )}
          </div>
          {isOpenEditModal && currentEditId === item.id && (
            <EditModal
              isOpen={isOpenEditModal}
              onClose={() => setIsOpenEditModal(false)}
              id={item.id}
              currentTask={item.title}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default ToDoList;
