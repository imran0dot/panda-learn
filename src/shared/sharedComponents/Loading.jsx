import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center items-center fixed top-0 bottom-0 left-0 right-0 z-50'>
            <FadeLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;