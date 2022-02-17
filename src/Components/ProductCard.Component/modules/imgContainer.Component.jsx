import React from 'react';

const Imgcontainer = ({clss,imgSrc}) => {
    return (
        <figure className={clss}>
            <img src={imgSrc} alt="cardPhoto" />
        </figure>
    );
}

export default Imgcontainer;
