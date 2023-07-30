import InstrauctorCard from '../../Components/InstructorsComponents/InstrauctorCard';
import Title from '../../shared/sharedComponents/Title';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Fixedwidth from '../../Layouts/Fixedwidth';
import Loading from '../../shared/sharedComponents/Loading';

const Instructors = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios(`/users/role/instructor`)
            .then(res => {
                setData(res.data)
                setLoading(false)});
    }, [])
    return (
        <div>
            {
                loading ? <Loading /> :
                    <Fixedwidth >
                        <Title title="Our best instructors" subTitle="Have a look at your perfect instructors" align="center" />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                            {
                                data?.map(instructor => {
                                    return (<InstrauctorCard key={instructor._id} instructor={instructor} />)
                                })
                            }
                        </div>
                    </Fixedwidth>
            }
        </div>

    );
};

export default Instructors;