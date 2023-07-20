import React from 'react';

const Fixedwidth = ({children}) => {
    return (
        <div className='w-8/12 mx-auto'>
            {children}
        </div>
    );
};

export default Fixedwidth;