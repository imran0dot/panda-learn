import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import Button from './Button';


const ClassBox = ({ image }) => {
    return (
        <Link
            className='p-7 shadow-sm flex flex-col gap-2 border duration-300 hover:shadow-lg'>
            <img className='border' src={image} alt="" />
            <h4 className='text-2xl font-bold'>The Complete Python Bootcamp</h4>
            <div className=''>
                <span className='flex items-center gap-2'>
                    4.6<ReactStars
                    count={5}
                    value={4}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                />(12000)</span>
                <p className='font-bold'>$20.99 <s className=' font-thin '>$30.99</s></p>
            </div>
            <Button to="/">Enroll Now</Button>
        </Link>
    );
};

export default ClassBox;