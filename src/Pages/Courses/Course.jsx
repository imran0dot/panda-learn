import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Fixedwidth from '../../Layouts/Fixedwidth';
import Loading from '../../shared/sharedComponents/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../Components/Forms/CheckOutForm';

const Course = () => {
    const params = useParams();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const stripePromise = loadStripe(import.meta.env.VITE_STRIPE);
    const url = `/course/?id=${params.id}`;

    useEffect(() => {
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
                        <div className='grid grid-cols-2 gap-10'>

                            <div>
                                <img src={data.image} />
                            </div>

                            <div className='py-20'>
                                <div className='flex flex-col gap-3'>
                                    <h2 className='text-5xl font-bold'>{data.name} </h2>
                                    <h3 className='text-2xl font-bold'>Instructor: {data?.instructior}</h3>

                                    <h5 className='text-xl font-bold'>Category: {data.category}</h5>
                                    <h6 className='font-bold'>Avilable Sit: {data.sitNumber}</h6>
                                    <p className='text-2xl font-bold'>Price: {data?.sellPrice} <del >${data?.price}</del></p>

                                    <Elements stripe={stripePromise}>
                                        <CheckoutForm 
                                        loading={loading}
                                        courseId={data._id}
                                        sitNumber={data.sitNumber}
                                        price={JSON.parse(data?.sellPrice)}
                                        
                                        />
                                    </Elements>
                                </div>
                            </div>
                        </div>

                        <div>

                            <h2 className='text-3xl font-bold mb-2'>Discription:</h2>
                            <p className='font-sm text-xl'>{data?.discreption}</p>
                        </div>
                    </Fixedwidth>
            }
        </div>
    );
};

export default Course;