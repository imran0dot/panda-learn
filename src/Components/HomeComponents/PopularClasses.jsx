import image from '../../assets/imgs/Image1.png'
import Fixedwidth from '../../Layouts/Fixedwidth';
import Title from '../../shared/sharedComponents/Title';
import ClassBox from '../../shared/sharedComponents/ClassBox';
import axios from 'axios';
import Loading from '../../shared/sharedComponents/Loading';
import { useQuery } from 'react-query';

const PopularClasses = () => {
    const { isLoading, isError, data } = useQuery({
        queryKey: ['all_course'],
        queryFn: async () => {
            try {
                const res = await axios("/all-course");
                return res.data;
            } catch (err) {
                console.log(err);
                throw err;
            }
        }
    });

    if (isLoading) {
        return <Loading />
    }

    if (!isLoading && !isError && data) {
        return (
            <div className='my-10'>
                <Fixedwidth>
                    <Title title="Best selling Classes" subTitle="Our popular and best selling classe " />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                        {
                            data?.slice(0, 8).map((singleCourse, i) => {
                                return (
                                    <ClassBox singleCourse={singleCourse} key={i} placeHolder={image} />
                                )
                            })
                        }
                    </div>
                </Fixedwidth>
            </div>)
    }
};

    



 export default PopularClasses;