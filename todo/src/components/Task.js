import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTaskStatus } from '../redux/taskSlice';

const Task = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newDescription, setNewDescription] = useState(task.description);
    const dispatch = useDispatch();

    const handleEditTask = () => {
        dispatch(editTask({ id: task.id, description: newDescription }));
        setIsEditing(false);
    };

    return (
        <div className={`flex items-center justify-between  p-2 rounded border-b mx-3 ${task.isDone ? 'bg-white ' : 'bg-slate-100'}`}>
            {isEditing ? (
                <div className="flex-1">
                    <input
                        type="text"
                        value={newDescription}
                        onChange={(e) => setNewDescription(e.target.value)}
                        className="border border-gray-300 p-2 rounded w-full"
                    />
                    <button
                        onClick={handleEditTask}
                        className="bg-green-500 text-white px-2 py-1 rounded mt-2 hover:bg-green-600"
                    >
                        Sauvegarder
                    </button>
                </div>
            ) : (
            <div
                className={`flex-1 ${task.isDone ? 'line-through text-gray-300 ' : ''}`}
            >
                {task.description}
            </div>
            )}
            <div>
                <button
                    onClick={() => setIsEditing(true)}
                    className={`bg-gray-500 text-white px-4 py-2 rounded hover:bg-yellow-600 ${task.isDone ? 'hidden' : ''}`}
                >
                    Modifier
                </button>
                <button
                    onClick={() => dispatch(toggleTaskStatus(task.id))}
                    className={`ml-1 px-4 py-2 rounded text-white ${
                        task.isDone ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                    }`}
                >
                    {task.isDone ? 'Non fait' : 'Fait'}
                </button>
            </div>
            
        </div>
    );
};

export default Task;
