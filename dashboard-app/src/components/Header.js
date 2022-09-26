import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({name, onAdd, showAdd}) => {

    return(
        <header className="header">
            <h1 style={{color:'black'}}>
                {name}'s Tasks
            </h1>
            <Button className="btn" text={showAdd ? 'Close': 'Add'} onClick={onAdd}/>
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