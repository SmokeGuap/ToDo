import { useState } from 'react';
import Input from './components/Input';
import List from './components/List';

function App() {
  const [items, setItems] = useState([]);
  const [color, setColor] = useState('purple');
  const [item, setItem] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (item != '') {
      setItems([...items, item]);
      setItem('');
    }
  };

  const handleDelete = (text) => {
    const newItems = items.filter((item) => {
      return item != text;
    });
    setItems(newItems);
  };

  const handleDeleteAll = () => {
    setItems([]);
  };

  const handleColor = () => {
    const colors = ['purple', 'green', 'blue', 'red'];
    let rand = Math.floor(Math.random() * colors.length);
    setColor(colors[rand]);
  };

  return (
    <>
      <div
        className={`min-h-screen bg-gradient-to-br from-${color}-200 via-${color}-400 to-${color}-800 text-white`}
      >
        <div className='flex flex-col justify-center items-center h-screen'>
          <button
            className={`mb-5 py-4 border rounded-lg px-6 hover:bg-white hover:text-${color}-600 transform active:scale-90 transition-transform`}
            onClick={handleColor}
          >
            Change Color
          </button>
          <div className='w-vh'>
            <div className='transform transition duration-500 hover:scale-125'>
              <h2 className='text-6xl text-center mb-10'>ToDo List</h2>
            </div>
            <div className=''>
              <Input item={item} setItem={setItem} handleAdd={handleAdd} />
              <List items={items} handleDelete={handleDelete} />
            </div>
            <button
              onClick={handleDeleteAll}
              className='mt-5 w-full py-4 border rounded-lg px-6 hover:bg-white hover:text-purple-600 transform active:scale-90 transition-transform'
            >
              Delete All
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
