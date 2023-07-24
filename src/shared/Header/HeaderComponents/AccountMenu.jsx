import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useEffect, useState } from 'react';
import LogoutBtn from '../../sharedComponents/LogoutBtn';

const AccountMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const { user } = useAuth();
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
            {
                user ?
                    <div
                        onClick={() => setShowMenu(!showMenu)}
                        className='relative'>
                        <img className='rounded-full cursor-pointer w-10 h-10 object-cover' src={user?.photoURL} alt="" />
                        <div className={`account-menu absolute z-10 mt-5 w-40  border left-0 bg-white rounded-lg list-none duration-300 ${showMenu ? "block" : "hidden"}`}>
                            <div className='rounded-lg overflow-hidden'>
                                {
                                    menuItems.map((menu, index) => 
                                    <Link
                                    key={index}
                                    to={menu.url}
                                    className='w-full duration-150 hover:text-white hover:bg-[#00988A] inline-block p-3'>{menu.name}</Link>)
                                }
                                
                                <Link
                                    className='w-full duration-150 relative hover:text-white hover:bg-[#00988A] inline-block'>
                                    <LogoutBtn>Log Out</LogoutBtn>
                                </Link>
                            </div>
                        </div>
                    </div> : <Link to="/login" className='btn btn-outline rounded-full'>Login</Link>
            }
        </div>
    );
};

export default AccountMenu;