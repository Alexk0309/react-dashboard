import {useState} from 'react'
import Button from './Button.js'

const Search = ({searchTask, clearSearch}) => {

    const [text, setText] = useState('')

    const onSearch = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please search a task')
            return
        }

        searchTask(text)

        setText('')
        
    }

    return (
        <div className='search-container'>
            <form className='search-form' onSubmit={onSearch}>
                <div className='search'>
                    <input 
                    id='search-input'
                    type='text' 
                    placeholder='Search Task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}>
                    </input>
                </div>
                <input
                id='search-btn'
                type='submit'
                value='Search'>
                </input>
            </form>
            <Button id='clear-btn' text={'Clear'} onClick={clearSearch}></Button>
        </div>
    )
}

export default Search