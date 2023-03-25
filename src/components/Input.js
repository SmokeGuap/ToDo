function Input({ item, setItem, handleAdd }) {
  return (
    <form className='flex justify-between mb-5' onSubmit={handleAdd}>
      <input
        className='cursor-pointer placeholder-white w-full outline-none py-4 px-6 border rounded-2xl bg-inherit hover:border-2'
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
        placeholder='Enter a task'
        maxLength='25'
      ></input>
      <button
        className='border rounded-2xl ml-5 py-4 px-6 hover:bg-white hover:text-purple-600 transform active:scale-90 transition-transform'
        type='submit'
      >
        OK
      </button>
    </form>
  );
}
export default Input;
