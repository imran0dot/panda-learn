import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex bg-white justify-center items-center absolute top-0 bottom-0 left-0 right-0 z-50'>
            <FadeLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;