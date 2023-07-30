import { BiSearchAlt } from 'react-icons/bi';



const Hero = () => {
    return (
            <div className='text-center'>
                <div className='bg-[#DEDEDE] p-0 md:py-10 lg:py-10 hero'>

                    <div data-aos="zoom-in" className='w-full md:w-8/12 lg:w-5/12 mx-auto flex flex-col gap-5 md:gap-10 p-10 md:p-20 bg-[#2E836F] bg-opacity-70  rounded-none md:rounded-lg lg:rounded-lg lg:shadow-lg text-white'>
                        <h1 className='text-4xl md:text-5xl font-bold'>Master Languages with Panda Learning!</h1>

                        <p>Embrace Multilingual Mastery: Explore the Rich Tapestry of Languages, Engage in Immersive Learning Adventures, and Excel as a Global Communicator</p>

                        <label htmlFor="" className='relative flex items-center rounded-full overflow-hidden shadow-lg input input-bordered '>
                            <input type="text" placeholder="Type here" className="w-full outline-none" />

                            <div className=' absolute right-0 text-2xl bg-[#00988A] p-3 w-16 flex justify-center cursor-pointer text-white'>
                                <BiSearchAlt />
                            </div>
                        </label>
                    </div>
                </div>

                <div
                    className='bg-[#00988A] flex flex-col md:flex-row text-center justify-center items-center gap-4 py-7'>
                    <h1 className='text-2xl md:text-3xl font-bold text-white'>German Bonanza: Unleash Your Linguistic Potential with Irresistible<span className='text-[#FBBB5B]'> Learning Offers </span></h1>

                    {/* <button className='btn bg-white text-black rounded-full'>ENROLL NOW</button> */}
                </div>
            </div>

    );
};

export default Hero;