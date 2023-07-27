import { useLoaderData } from 'react-router-dom';
import InstrauctorCard from '../../Components/InstructorsComponents/InstrauctorCard';
import Title from '../../shared/sharedComponents/Title';

const Instructors = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    return (
        <div className='my-10 w-10/12 lg:w-8/12 mx-auto'>
            <Title title="Our best instructors" subTitle="Have a look at your perfect instructors" align="center" />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {
                    loadedData?.data?.map(instructor => {
                        return (<InstrauctorCard key={instructor._id} instructor={instructor} />)
                    })
                }
            </div>
        </div>
    );
};

export default Instructors;