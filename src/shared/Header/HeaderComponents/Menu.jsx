import { Link } from 'react-router-dom';
import AciveLink from '../../../Components/AciveLink';
import useAuth from '../../../Hooks/useAuth';
import AccountMenu from './AccountMenu';

const Menu = ({ mobileMenu }) => {

    const menuItems = [
        {
            name: 'Home',
            to: "/home",
        },
        {
            name: 'courses',
            url: "/classes",
        },
        {
            name: 'Instractors',
            url: "/instractors",
        },
        {
            name: 'Contact us',
            url: "/contact-us",
        },
        {
            name: 'About us',
            url: "/about-us",
        }
    ];

    return (
        <div>
            <nav className='lg:flex gap-4 justify-center items-center hidden'>
                {menuItems.map((x, i) => {
                    return (
                        <AciveLink key={i} to={x.url}>
                            {x.name}
                        </AciveLink>
                    )
                })}
                <Link className='btn btn-outline rounded-full'>Enroll Now</Link>
                <AccountMenu />

            </nav>

            <div className={`fixed bg-white w-8/12 flex justify-center z-10 lg:hidden h-full top-0 duration-300 ${mobileMenu ? "left-0" : "-left-[100%]"}`}>
                <nav className='gap-4 justify-center items-center flex flex-col'>

                    {menuItems.map((x, i) => {
                        return (
                            <AciveLink key={i} to={x.url}>
                                {x.name}
                            </AciveLink>
                        )
                    })}
                    <Link className='btn btn-outline rounded-full w-36'>Enroll Now</Link>
                    <Link
                        to="/login"
                        className='btn btn-outline rounded-full w-36'>Login</Link>
                </nav>
            </div>
        </div>
    );
};

export default Menu;