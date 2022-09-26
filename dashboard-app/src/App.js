import Header from './components/Header.js'
import './App.css';
import Tasks from './components/Tasks.js'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(
    [
        {
            id: 1, 
            text: 'DS assignment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2, 
            text: 'STC Meeting',
            day: 'Feb 6th at 9:00pm',
            reminder: true,
        },
        {
            id: 3, 
            text: 'MIC Meeting',
            day: 'Feb 6th at 10:30pm',
            reminder: false,
        }
    ]
)

const deleteTask = (id) => {
  setTasks(tasks.filter( (task) => task.id !== id ))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id
  ? { ...task, reminder :  !task.reminder } : task))
}

  return (
    <div className="App">
      <header className="App-header">
        <div className="dashboard-container">
          <Header name={"Alex"} />
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
          ) : (
            'No tasks to show'
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
