import Fixedwidth from '../Layouts/Fixedwidth';
import image from '../assets/imgs/Image1.png'
import InstractorCard from './HomeComponents/InstractorCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Title from '../shared/sharedComponents/Title';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const PopularInstractor = () => {
    const [instructors, setInstructors] = useState([]);
    const uri = `${import.meta.env.VITE_SERVERLINK}/user/role/student`
    useEffect(() => {
        axios.get(uri).then(res => setInstructors(res.data))
    }, [])
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
                            instructors.map((instructor, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <InstractorCard instructor={instructor} image={image} />
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