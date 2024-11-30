import { useState, useEffect } from 'react';

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

export default useRebound;