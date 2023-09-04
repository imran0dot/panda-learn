import { Link } from 'react-router-dom';
import Fixedwidth from '../../Layouts/Fixedwidth';
import { AiOutlineArrowRight } from 'react-icons/ai'

const InfoBoard = () => {
    const info = [1, 2, 3, 4, 5, 6];
    return (
        <div className='bg-[#2E836F] py-10'>
            <Fixedwidth>
                <div className='flex flex-col gap-5'>
                    <div className='flex justify-between text-white font-bold'>
                        <h3 className='text-3xl'>Save big on these popular extensions</h3>
                        <Link to="/courses" className='cursor-pointer'>Browse Sales <AiOutlineArrowRight className='inline' /></Link>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 text-center'>
                        {
                            info.map((x, i) => {
                                return (
                                    <div key={i} className='bg-[#34947D] text-white py-3 font-bold text-xl rounded-sm shadow-sm'>
                                        <h3>Online</h3>
                                        <h5>$100</h5>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </Fixedwidth>
        </div>
    );
};

export default InfoBoard;