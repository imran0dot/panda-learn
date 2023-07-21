import { Link } from "react-router-dom"

const InstractorCard = ({ image }) => {
    return (
            <Link className='p-7 shadow-md flex flex-col gap-4 border-y-4 border-transparent duration-300 hover:shadow-lg hover:border-y-4 hover:rounded-3xl hover:border-y-[#00988A] hover:scale-95'>
                <img src={image} alt="" />
                <h4 className='text-2xl font-bold'>Expert Instructors</h4>
                <p>Native-speaking experts offer immersive and personalized language instruction for successful fluency.</p>
                <button className="btn text-white bg-[#00988A] hover:bg-[#2E836F]">About Me</button>
            </Link>
    );
};

export default InstractorCard;