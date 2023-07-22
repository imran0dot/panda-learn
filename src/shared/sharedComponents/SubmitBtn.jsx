import React from 'react';

const SubmitBtn = ({ loading, children }) => {
    return (
        <input

            className='btn bg-[#00988A] text-white hover:bg-[#2E836F]'
            type="submit" value={children} />
    );
};

export default SubmitBtn;