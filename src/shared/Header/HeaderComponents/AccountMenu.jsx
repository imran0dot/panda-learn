import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useState } from 'react';
import LogoutBtn from '../../sharedComponents/LogoutBtn';
import { studentMenuItems } from '../../../Components/Dashboard/StudentMenu';
import { adminMenuItems } from '../../../Components/Dashboard/AdminMenu';
import { instractorsMenuItems } from '../../../Components/Dashboard/InstractorMenu';
import { useEffect } from 'react';

const AccountMenu = () => {
    const [showMenu, setShowMenu] = useState(false)
    const [menuItems, setMenuItems] = useState([]);
    const { userRole } = useAuth();
    console.log(userRole);
    const { user } = useAuth();
    const studentMenu = studentMenuItems;
    const adminMenu = adminMenuItems;
    const instractorsMenu = instractorsMenuItems;

    useEffect(() => {
        { userRole == "Student" && setMenuItems(studentMenu) }
        { userRole == "Instractor" && setMenuItems(instractorsMenu) }
        { userRole == "Admin" && setMenuItems(adminMenu) }
    }, [])

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