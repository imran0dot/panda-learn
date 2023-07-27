import { Link } from "react-router-dom"

const InstractorCard = ({instructor }) => {
    return (
            <div className='p-7 shadow-md flex flex-col gap-4 border-y-4 border-transparent duration-300 hover:shadow-lg hover:border-y-4 hover:rounded-3xl hover:border-y-[#00988A] hover:scale-95'>
                <img className="w-full h-96 object-cover rounded-lg border " src={instructor.image} alt="" />
                <h4 className='text-2xl font-bold'>{instructor?.name}</h4>
                <h6 className="font-bold">{instructor?.address}</h6>
                <p>Native-speaking experts offer immersive and personalized language instruction for successful fluency.</p>
                <Link 
                to={`/instructor/${instructor._id}`}
                className="btn text-white bg-[#00988A] hover:bg-[#2E836F]">About Me</Link>
            </div>
    );
};

export default InstractorCard;