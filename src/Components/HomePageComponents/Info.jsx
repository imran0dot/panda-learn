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
                    <h2 className='text-4xl font-bold'>Oh yes, you really do want to register your domain name</h2>
                    <p>Whether it’s for your blog, business, portfolio, or link in bio, buying your domain early is smart.</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 py-10'>
                        <div className='p-7 shadow-sm flex flex-col gap-4 border duration-300 hover:shadow-lg'>
                            <img src={image1} alt="" />
                            <h4 className='text-2xl font-bold'>Creators & influencers</h4>
                            <p>Today it’s your Linktree. Tomorrow it’s your store. With a domain, your audience always knows where to find you off-platform.</p>
                        </div>
                        <div className='p-7 shadow-sm flex flex-col gap-4 border duration-300 hover:shadow-lg'>
                            <img src={image2} alt="" />
                            <h4 className='text-2xl font-bold'>Creators & influencers</h4>
                            <p>Today it’s your Linktree. Tomorrow it’s your store. With a domain, your audience always knows where to find you off-platform.</p>
                        </div>
                        <div className='p-7 shadow-sm flex flex-col gap-4 border duration-300 hover:shadow-lg'>
                            <img src={image3} alt="" />
                            <h4 className='text-2xl font-bold'>Creators & influencers</h4>
                            <p>Today it’s your Linktree. Tomorrow it’s your store. With a domain, your audience always knows where to find you off-platform.</p>
                        </div>
                        <div className='p-7 shadow-sm flex flex-col gap-4 border duration-300 hover:shadow-lg'>
                            <img src={image4} alt="" />
                            <h4 className='text-2xl font-bold'>Creators & influencers</h4>
                            <p>Today it’s your Linktree. Tomorrow it’s your store. With a domain, your audience always knows where to find you off-platform.</p>
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