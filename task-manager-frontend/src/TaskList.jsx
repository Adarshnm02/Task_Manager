import React from 'react';

const TaskList = ({ tasks }) => {
    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold mb-4'>Tasks</h2>
            <ul className='list-disc pl-5'>
                {task.map((task) => (
                    <li key={task._id} className='mb-2'>
                        <span className='text-lg font-medium'>{task.title}</span>
                        <p className='text-gray-600'>{task.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;