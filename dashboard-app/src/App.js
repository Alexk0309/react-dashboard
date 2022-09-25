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

  return (
    <div className="App">
      <header className="App-header">
        <div className="dashboard-container">
          <Header name={"Alex"} />
          <Tasks tasks={tasks} onDelete={deleteTask}/>
        </div>
      </header>
    </div>
  );
}

export default App;
