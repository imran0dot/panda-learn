import React from 'react';

const Hero = () => {
    return (
        <div className='min-w-fit py-10 text-center'>

            <div className='w-5/12 mx-auto flex flex-col gap-10 my-20'>
                <h1 className='text-5xl font-bold'>Totally Free Essay Database</h1>

                <p className='font-bold'>Get inspiration for your assignment from thousands of free essay examples, samples, topics and research papers.</p>
            </div>

            <div className='bg-[#00988A] flex text-center justify-center items-center gap-4 py-7'>
                <h1 className='text-3xl font-bold text-white'>Need a custom essay sample written specifically for you for <span className='text-[#FBBB5B]'>9.35/page?</span></h1>
                <button className='btn bg-white text-black rounded-full'>ENROLL NOW</button>
            </div>
        </div>
    );
};

export default Hero;