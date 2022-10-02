import {useState} from 'react'

const Search = ({searchTask}) => {

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
        

    )
}

export default Search