import React from 'react';
import PropTypes from 'prop-types'

const Link = ({active, children, onClick}) => (
        <button
            onClick={onClick}
            disabled={active}
            style = {{marginLeft: "4px"}}>
            {children}
           </button>
);

// eslint-disable-next-line react/no-typos
Link.PropTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.none.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;