import { Link } from 'react-router-dom';

const Button = ({to, children}) => {
    return (
        <Link 
        to={to}
        className='btn bg-[#00988A] hover:bg-[#2E836F] text-white duration-300'>
            {children}
        </Link>
    );
};

export default Button;