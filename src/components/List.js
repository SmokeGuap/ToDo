import { useState } from 'react';

function List({ items, handleDelete }) {
  const handleEdit = (item) => {
    const li = document.querySelector(`li[id='${item}']`);
    const edit = document.querySelector(`form[id='${item}']`);
    const input = edit.querySelector('input');
    edit.classList.remove('hidden');
    input.value = li.innerHTML;
  };

  const handleChanges = (e) => {
    e.preventDefault();
    const li = document.querySelector(`li[id='${e.target.id}']`);
    li.innerHTML = e.target[0].value;
    e.target.classList.add('hidden');
  };

  return (
    <>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <div
              className='flex justify-between w-full border-b-2 border-white py-4 relative'
              key={index}
            >
              <li id={item} className=''>
                {item}
              </li>
              <form
                id={item}
                onSubmit={handleChanges}
                className='hidden w-full absolute z-10 top-2 flex justify-between bg-white rounded-2xl text-purple-600'
              >
                <input
                  maxLength='25'
                  className='cursor-pointer outline-none w-full py-2 px-6 rounded-2xl'
                ></input>
                <button className='rounded-2xl ml-5 px-6 hover:bg-white py-2 hover:text-purple-600 transform active:scale-90 transition-transform'>
                  Edit
                </button>
              </form>
              <div className='flex'>
                <button
                  className='border rounded-lg px-6 hover:bg-white hover:text-purple-600 transform active:scale-90 transition-transform'
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className='border rounded-lg px-6 ml-5 hover:bg-white hover:text-purple-600 transform active:scale-90 transition-transform'
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <div className='flex justify-between w-full border-b-2 border-white py-4'>
          No Task Found
        </div>
      )}
    </>
  );
}
export default List;
