import Fixedwidth from '../../Layouts/Fixedwidth';
import image1 from '../../assets/imgs/Image1.png'
import image2 from '../../assets/imgs/Image2.png'
import image3 from '../../assets/imgs/Image3.png'
import image4 from '../../assets/imgs/Image4.png'
import InfoBoard from '../InfoBoard';
const Info = () => {
    return (
        <div className='py-10'>
            <Fixedwidth>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-4xl font-bold'>Unrivaled Language Learning Excellence</h2>
                    <p>Why Panda Learning Reigns Supreme</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-10'>
                        <div className='p-7 shadow-sm flex flex-col gap-4 border duration-300 hover:shadow-lg'>
                            <img src={image1} alt="" />
                            <h4 className='text-2xl font-bold'>Expert Instructors</h4>
                            <p>Native-speaking experts offer immersive and personalized language instruction for successful fluency.</p>
                        </div>
                        <div className='p-7 shadow-sm flex flex-col gap-4 border duration-300 hover:shadow-lg'>
                            <img src={image2} alt="" />
                            <h4 className='text-2xl font-bold'>Comprehensive Course Curriculum</h4>
                            <p>Thoughtfully designed courses cover grammar, vocabulary, and culture for all proficiency levels.</p>
                        </div>
                        <div className='p-7 shadow-sm flex flex-col gap-4 border duration-300 hover:shadow-lg'>
                            <img src={image3} alt="" />
                            <h4 className='text-2xl font-bold'>Engaging Learning Platform</h4>
                            <p>Interactive lessons, multimedia content, and language labs create enjoyable learning experiences.</p>
                        </div>
                        <div className='p-7 shadow-sm flex flex-col gap-4 border duration-300 hover:shadow-lg'>
                            <img src={image4} alt="" />
                            <h4 className='text-2xl font-bold'>Supportive Learning Community</h4>
                            <p>Connect with diverse learners, practice with native speakers, and grow in a collaborative environment.</p>
                        </div>
                    </div>
                </div>
            </Fixedwidth>
            <InfoBoard />
            <div>

            </div>
        </div>
    );
};

export default Info;