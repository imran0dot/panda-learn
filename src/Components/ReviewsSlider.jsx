import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const ReviewsSlider = () => {
    const reviews = [1, 2, 3, 4, 5]
    return (
        <div>
            <Swiper
                slidesPerView={3}
                loop={false}
                spaceBetween={30}
                navigation={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    reviews.map((review, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='bg-[#F0F9F5] p-10'>
                                    <p className='text-lg'>“We’ve been using Hover for twelve years for client sites. Hover’s customer service is the best we’ve experienced from any domain provider…We wouldn’t even consider using anyone else.”</p>
                                    <h5 className='font-bold text-lg'>Kirsty Cleverly</h5>
                                    <h6 className='text-sm'>Binary Formations</h6>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
};

export default ReviewsSlider;