import DashboardMenu from "../../shared/sharedComponents/DashboardMenu";

const StudentMenu = () => {
    const menuItems = [
        {
            name: 'Home',
            to: "/home",
        },
        {
            name: 'Products',
            url: "/",
        },
        {
            name: 'Services',
            url: "/",
        },
        {
            name: 'Contact',
            url: "/",
        }
    ];
    return (
        <DashboardMenu>{menuItems}</DashboardMenu>
    );
};

export default StudentMenu;