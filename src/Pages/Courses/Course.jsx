import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Fixedwidth from '../../Layouts/Fixedwidth';
import Loading from '../../shared/sharedComponents/Loading';
import { useFackDb, existItem } from '../../Hooks/useFackDb';
import AddToCartBtn from '../../shared/sharedComponents/AddToCartBtn';

const Course = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const url = `/course/?id=${params.id}`;
    const isExistItem = existItem(data._id);
    

    useEffect(() => {
        axios("/paid-courses",).then(res => {
            console.log(res.data);
        }).catch(err => console.log("hello"))
        axios(url)
            .then(res => {
                setData(res.data);
                setLoading(false);
            });

    }, [])
    return (
        <div className='my-20'>
            {
                loading ? <Loading /> :
                    <Fixedwidth>
                        <div className='grid md:grid-cols-2 gap-10'>

                            <div>
                                <img className='bg-[#F9F9F9] border w-full' src={data.image} />
                            </div>

                            <div className='bg-[#F9F9F9] border p-3'>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-5xl font-bold'>{data.name} </h2>
                                    <h3 className='text-2xl font-bold'>Instructor: {data?.instructior}</h3>

                                    <h5 className='text-xl font-bold'>Category: {data.category}</h5>
                                    <h6 className='font-bold'>Avilable Sit: {data.sitNumber}</h6>
                                    <p className='text-2xl font-bold'>Price: {data?.sellPrice} <del >${data?.price}</del></p>
                                     <AddToCartBtn useFackDb={useFackDb} data={data}>Add To cart</AddToCartBtn>
                                    
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#F9F9F9] border p-6'>
                            <h2 className='text-3xl font-bold mb-2'>Discription:</h2>
                            <p className='font-sm text-xl'>{data?.discreption}</p>
                        </div>
                    </Fixedwidth>
            }
        </div>
    );
};

export default Course;