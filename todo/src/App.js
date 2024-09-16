import React from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

const App = () => {
  return (
    <div className='flex justify-center items-center mt-10'>
      <div className='flex flex-col w-1/2  border '>
        <h1 className='text-center font-bold text-2xl bg-gray-100 py-2'>Gestion des tâches</h1>
        <AddTask />
        <ListTask />
      </div>
    </div>
    
  );
};

export default App;
