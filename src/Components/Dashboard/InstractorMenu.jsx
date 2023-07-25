import DashboardMenu from "../../shared/sharedComponents/DashboardMenu";

export const instractorsMenuItems = [
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
const InstractorMenu = () => {
    return (
        <DashboardMenu>{instractorsMenu}</DashboardMenu>
    );
};

export default InstractorMenu;