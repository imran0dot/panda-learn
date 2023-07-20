import { Link } from 'react-router-dom';
import image404 from '../../assets/imgs/404.avif'

const Error = () => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center'>
            <img src={image404} alt="" />
            <Link to="/" className='btn'>Back to Home</Link>
        </div>
    );
};

export default Error;