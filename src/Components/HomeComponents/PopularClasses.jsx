import image from '../../assets/imgs/Image1.png'
import Fixedwidth from '../../Layouts/Fixedwidth';
import Title from '../../shared/sharedComponents/Title';
import ClassBox from '../../shared/sharedComponents/ClassBox';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const PopularClasses = () => {
    const [course, setCourse] = useState([])
    useEffect(() => {
        axios("/all-course").then(res => setCourse(res.data)).catch(err => console.log(err));
    }, [])
    return (
        <div className='my-10'>
            <Fixedwidth>
                <Title title="Best selling Classes" subTitle="Our popular and best selling classe " />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                    {
                        course?.slice(0, 8).map((singleCourse, i) => {
                            return (
                                <ClassBox singleCourse={singleCourse} key={i} placeHolder={image} />
                            )
                        })
                    }
                </div>
            </Fixedwidth>
        </div>
    );
};

export default PopularClasses;