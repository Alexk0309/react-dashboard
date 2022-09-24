import PropTypes from 'prop-types'

const Header = ({name}) => {
    return(
        <header className="header">
            <h1 style={{color:'black'}}>
                {name}'s Tasks
            </h1>
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