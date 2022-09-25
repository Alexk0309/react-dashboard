import Button from './Button.js'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete}) => {
    return (
        <div className='task'>
            <div className='task-details'>
                <h3 className='task-name'>
                    {task.text}
                </h3>
                <p className='task-day'>{task.day}</p>
            </div>
            <FaTimes 
            style={{color:'red', cursor:'pointer', height:'130'}} 
            onClick={ () => onDelete(task.id) }
            />
        </div>
    )
}

export default Task