import InstrauctorCard from '../../Components/InstructorsComponents/InstrauctorCard';
import Title from '../../shared/sharedComponents/Title';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Instructors = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios(`/users/role/instructor`)
        .then(res => setData(res.data));
    }, [])
    return (
        <div className='my-10 w-10/12 lg:w-8/12 mx-auto'>
            <Title title="Our best instructors" subTitle="Have a look at your perfect instructors" align="center" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    data?.map(instructor => {
                        return (<InstrauctorCard key={instructor._id} instructor={instructor} />)
                    })
                }
            </div>
        </div>
    );
};

export default Instructors;