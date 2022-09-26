const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task'></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Day & Time'></input>
            </div>
            <div className='form-control reminder-checkbox'>
                <label>Reminder</label>
                <input id='reminder-checkbox' type='checkbox'></input>
            </div>

            <input id='submit-btn' type='submit' value='Save Task'></input>
        </form>
    )
}

export default AddTask