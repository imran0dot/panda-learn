import React from 'react';
import ReviewsSlider from '../ReviewsSlider';
import Fixedwidth from '../../Layouts/Fixedwidth';

const Review = () => {
    return (
        <div className='lg:p-20'>
            <Fixedwidth>
                <h3 className='text-center text-3xl lg:text-5xl font-bold mb-10'>Look what our students say!</h3>
                <ReviewsSlider />
            </Fixedwidth>
        </div>
    );
};

export default Review;