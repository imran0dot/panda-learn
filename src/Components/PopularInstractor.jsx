import Fixedwidth from '../Layouts/Fixedwidth';
import image from '../assets/imgs/Image1.png'
import InstractorCard from './HomeComponents/InstractorCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Title from '../shared/sharedComponents/Title';

const PopularInstractor = () => {

    const array = [1, 2, 3, 4, 5, 6]
    return (
        <div className='py-10 bg-[#F0F9F5]'>
            <Fixedwidth>
                <Title title="Popular Instractors" subTitle="Panda Learning plateform is knows for best instractor" align="center" />
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