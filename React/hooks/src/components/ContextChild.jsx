import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Con from '../components/_context'

const ContextChild = props => {
    const msg = useContext(Con)
    return (
        <div>
            {msg}
        </div>
    );
};

ContextChild.propTypes = {

};

export default ContextChild;