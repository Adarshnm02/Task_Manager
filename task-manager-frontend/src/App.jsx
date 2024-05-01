import { useState } from 'react'
import TaskList from './TaskList'

function App() {
  const tasks = [
    { _id: '1', title: 'Learn React', description: 'Master the basics' },
    { _id: '2', title: 'Build a Task Manager', description: 'Use MERN stack' },
  ];

  return (
    <div>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default App
