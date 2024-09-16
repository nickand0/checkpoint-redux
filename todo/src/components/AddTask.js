import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';
import { v4 as uuidv4 } from 'uuid';

const AddTask = () => {
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if (description.trim()) {
            dispatch(addTask({ id: uuidv4(), description, isDone: false }));
            setDescription('');
        }
    };

    return (
        <div className="my-4 flex justify-center border rounded-md shadow-md mx-4">
            <input
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Ajouter une tâche"
                className=" rounded p-2 w-full outline-none"
            />
            <button
                onClick={handleAddTask}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
                Ajouter
            </button>
        </div>
    );
};

export default AddTask;
