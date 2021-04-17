import Button from './Button'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({title,  onAdd, showAdd}) => {
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button 
            color={showAdd ? "red" : "green"}
            text={showAdd ? "Close" : "Add"}
            onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title:"Person CRUD",
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// const headingStyle = { color: "red", backgroundColor: "black" };

export default Header
