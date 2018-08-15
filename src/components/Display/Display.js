import React from 'react';
import PropTypes from 'prop-types';
import './Display.css';

const Display = ({ value }) => {
    return (
        <div className="component-display">
            <p className="test">
                {value}
            </p>
        </div>
    );
};

Display.propTypes = {
    value: PropTypes.string
};

export default Display;
