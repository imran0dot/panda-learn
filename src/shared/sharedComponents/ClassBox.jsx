import ReactStars from "react-rating-stars-component";
import Button from './Button';


const ClassBox = ({ singleCourse, placeHolder }) => {
    const { name, category, price, sellPrice, _id, image, instructior } = singleCourse;
    return (
        <div
            className='p-7 shadow-sm flex flex-col gap-2 border duration-300 hover:shadow-lg'>
            <img className='border-2 rounded w-full h-60 object-cover' src={image ? image : placeHolder} alt="" />
            <h4 className='text-2xl font-bold'>{name} <span className="text-sm">by {instructior}</span></h4>
            <div className=''>
                <span className='flex items-center gap-2'>
                    4.6<ReactStars
                        count={5}
                        value={4}
                        size={24}
                        edit={false}
                        activeColor="#ffd700"
                    />(12000)</span>
                <p className='font-bold'>${sellPrice} <s className=' font-thin '>${price}</s></p>
            </div>
                <Button to="/">Enroll Now</Button>
        </div>
    );
};

export default ClassBox;