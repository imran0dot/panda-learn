import React from 'react';
import ReviewsSlider from '../ReviewsSlider';
import Fixedwidth from '../../Layouts/Fixedwidth';

const Review = () => {
    return (
        <div className='p-20'>
            <Fixedwidth>
                <h3 className='text-center text-6xl font-bold mb-10'>Look what our customers say!</h3>
                <ReviewsSlider />
            </Fixedwidth>
        </div>
    );
};

export default Review;