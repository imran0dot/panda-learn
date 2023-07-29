import { adminMenuItems, instractorsMenuItems, studentMenuItems } from '../Components/Dashboard/menuItems';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useState } from 'react';

const useUserMenu = () => {
    const { userRole } = useAuth();
    console.log(userRole);
    const [menuItems, setMenuItems] = useState([]);
    const studentMenu = studentMenuItems;
    const adminMenu = adminMenuItems;
    const instractorsMenu = instractorsMenuItems;

    useEffect(() => {
        { !userRole == true && setMenuItems(studentMenu) }
        { userRole == "student" && setMenuItems(studentMenu) }
        { userRole == "instructor" && setMenuItems(instractorsMenu) }
        { userRole == "admin" && setMenuItems(adminMenu) }
    }, [userRole])

    return menuItems
};

export default useUserMenu;