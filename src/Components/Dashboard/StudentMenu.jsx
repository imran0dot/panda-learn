import DashboardMenu from "../../shared/sharedComponents/DashboardMenu";


export const studentMenuItems = [
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

const StudentMenu = () => {
    return (
        <DashboardMenu>{studentMenuItems}</DashboardMenu>
    );
};

export default StudentMenu;