import { Link } from 'react-router-dom';
import image from '../../assets/imgs/Image1.png'
import Fixedwidth from '../../Layouts/Fixedwidth';
import Title from '../../shared/sharedComponents/Title';

const PopularClasses = () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className='my-10'>
            <Fixedwidth>
                <Title title="Best selling Classes" subTitle="Our popular and best selling classe " />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {
                        array.map((x, i) => {
                            return (
                                <Link
                                    key={i}
                                    className='p-7 shadow-sm flex flex-col gap-4 border duration-300 hover:shadow-lg'>
                                    <img className='border' src={image} alt="" />
                                    <h4 className='text-2xl font-bold'>The Complete Python Bootcamp</h4>
                                    <p>Native-speaking experts offer immersive and personalized language instruction for successful fluency.</p>
                                    <Link className='btn'>
                                            Enroll Now
                                    </Link>
                                </Link>
                            )
                        })
                    }
                </div>
            </Fixedwidth>
        </div>
    );
};

export default PopularClasses;