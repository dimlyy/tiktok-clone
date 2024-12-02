import { forwardRef } from "react";
import images from "../../assets/images";
import { useState } from "react";

import PropTypes from 'prop-types';

const Image = forwardRef(({src, alt, ...props }, ref) =>  {
    const [fallBack, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noimage);
    };

    return ( 
        <img src={fallBack || src} alt={alt} ref={ref} {...props} onError={handleError}/>
     );
})


export default Image;