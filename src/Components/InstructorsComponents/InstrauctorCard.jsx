import { Link } from "react-router-dom";

const InstrauctorCard = ({ instructor }) => {
    const { _id, email, address, image, name, role } = instructor;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img className="w-72 h-72 object-cover" src={image} alt={name - email} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{address}</p>
                <div className="card-actions justify-end">
                    {/* TODO need to make single instructos page  */}
                    <Link
                    to={`/instructor/${_id}`}
                     className="btn bg-[#00988A] hover:bg-[#2E836F] text-white w-full">Watch</Link>
                </div>
            </div>
        </div>
    );
};

export default InstrauctorCard;