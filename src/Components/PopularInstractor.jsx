import Fixedwidth from '../Layouts/Fixedwidth';
import image from '../assets/imgs/Image1.png'
import InstractorCard from './InstractorCard';

const PopularInstractor = () => {
    const array = [1, 2, 3, 4, 5, 6]
    return (
        <div className='py-10'>
            <Fixedwidth>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-4xl font-bold'>Popular Instractors</h2>
                    <p>Why Panda Learning Reigns Supreme</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            array.map(x => {
                                return (
                                    <InstractorCard key={x} image={image} />
                                )
                            })
                        }

                    </div>
                </div>
            </Fixedwidth>
        </div>
    );
};

export default PopularInstractor;