import { Link } from 'react-router-dom';
import AciveLink from '../../../Components/AciveLink';

const Menu = () => {
    const menuItems = [
        { "Home": "/" },
        { "Service": "/service" },
        { "We Are": "/team" },
        { "who we are": "/about us" },
    ]

    return (
            <nav className='flex gap-4 justify-center items-center'>
                {menuItems.map((x, i) => {
                    return (
                        <AciveLink key={i} to={Object.values(x).toString()}>
                            {Object.keys(x).toString()}
                        </AciveLink>
                    )
                })}
                <Link className='btn btn-outline rounded-full'>Enroll Now</Link>
                <Link className='btn btn-outline rounded-full'>Login</Link>
            </nav>
    );
};

export default Menu;