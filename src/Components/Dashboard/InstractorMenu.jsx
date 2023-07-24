import DashboardMenu from "../../shared/sharedComponents/DashboardMenu";

const InstractorMenu = () => {
    const menuItems = [
        {
            name: 'dashboard',
            to: "/home",
        },
        {
            name: 'My Classes',
            url: "/",
        },
        {
            name: 'My Students',
            url: "/",
        },
        {
            name: 'Contact',
            url: "/",
        }
    ]
    return (
        <DashboardMenu>{menuItems}</DashboardMenu>
    );
};

export default InstractorMenu;