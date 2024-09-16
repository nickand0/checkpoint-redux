import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
    const tasks = useSelector((state) => state.tasks);
    const [filter, setFilter] = useState('all');

    const filteredTasks = tasks.filter((task) => {
        if (filter === 'done') return task.isDone;
        if (filter === 'notDone') return !task.isDone;
        return true;
    });

    return (
        <div className="my-4">
            <div className="flex justify-center mb-4 border rounded-md mx-4 ">
                <button
                    onClick={() => setFilter('all')}
                    className={` border py-2  hover:bg-cyan-600 hover:text-white w-full transition duration-500 rounded-md
                    ${filter === 'all' ?'bg-cyan-800 text-white':''}`}
                >
                    Toutes
                </button>
                <button
                    onClick={() => setFilter('done')}
                    className={` border py-2  hover:bg-cyan-600 hover:text-white w-full transition duration-500 rounded-md
                        ${filter === 'done' ?'bg-cyan-900 text-white':''}`}
                >
                    Faites
                </button>
                <button
                    onClick={() => setFilter('notDone')}
                    className={` border py-2  hover:bg-cyan-600 hover:text-white w-full transition duration-500 rounded-md
                        ${filter === 'notDone' ?'bg-cyan-800 text-white':''}`}
                >
                    Non faites
                </button>
            </div>
            <div>
                {filteredTasks.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default ListTask;
