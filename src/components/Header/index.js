import React from 'react'
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';

const Header = (props) => {
    const { title, onAdd, showAdd } = props;
    const location = useLocation();

    return (
        <header className="header">
            <h1 className="header-taskTitle">{title}</h1>
            { location.pathname === '/' && (
                <Button
                    color={showAdd ? 'danger' : 'success'}
                    text={showAdd ? 'Close' : 'Add'}
                    onClick={onAdd}
                />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'QuickTd Task'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}


export default Header
