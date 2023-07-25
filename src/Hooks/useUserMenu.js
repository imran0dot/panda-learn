import { adminMenuItems, instractorsMenuItems, studentMenuItems } from '../Components/Dashboard/menuItems';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { useState } from 'react';

const useUserMenu = () => {
    const { userRole } = useAuth();
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