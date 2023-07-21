import Fixedwidth from '../Layouts/Fixedwidth';
import image from '../assets/imgs/Image1.png'
import InstractorCard from './HomeComponents/InstractorCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const PopularInstractor = () => {

    const array = [1, 2, 3, 4, 5, 6]
    return (
        <div className='py-10'>
            <Fixedwidth>
                <div>

                    <h2 className='text-4xl font-bold'>Popular Instractors</h2>
                    <p>Why Panda Learning Reigns Supreme</p>
                </div>
                <Swiper
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                        {
                            array.map(x => {
                                return (
                                    <SwiperSlide key={x}>
                                        <InstractorCard image={image} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </div>
                </Swiper>
            </Fixedwidth >
        </div >
    );
};

export default PopularInstractor;