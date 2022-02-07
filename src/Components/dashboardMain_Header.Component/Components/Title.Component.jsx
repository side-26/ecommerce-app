import React, { Children } from 'react';

const Title = ({clss,txt}) => {
    return (
        <div className={clss}>
            <h3>{txt} </h3>
        </div>
    );
}

export default Title;
