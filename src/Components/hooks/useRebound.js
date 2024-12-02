import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
function useRebound(value, delay) {
    const [reboundedValue, setReboundedValue] = useState('');

    useEffect(() => {
        const handleTimeout = setTimeout(() => {
            setReboundedValue(value);
        }, delay);

        return () => clearTimeout(handleTimeout);
    }, [value]); 

    return reboundedValue;
}

useRebound.propTypes = { 
    value: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
}

export default useRebound;