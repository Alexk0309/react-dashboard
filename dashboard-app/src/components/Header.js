import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({name}) => {
    
    const onClick = () => {
        console.log('click')
    }

    return(
        <header className="header">
            <h1 style={{color:'black'}}>
                {name}'s Tasks
            </h1>
            <Button className="btn" text="Add" onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    name: "User"
}

Header.propTypes = {
    name: PropTypes.string.isRequired, 
}

export default Header