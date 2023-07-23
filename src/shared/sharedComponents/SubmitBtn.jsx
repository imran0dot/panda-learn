import { PuffLoader } from 'react-spinners';

const SubmitBtn = ({ loading, children }) => {
    return (
        <button
            className='btn bg-[#00988A] text-white hover:bg-[#2E836F]'
            type="submit">
            {!loading ? children : <PuffLoader size="40px" color="#36d7b7" />
}
        </button>
    );
};

export default SubmitBtn;