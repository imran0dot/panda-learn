import DashboardMenu from "../../shared/sharedComponents/DashboardMenu";
export const adminMenuItems = [
    {
        name: 'Dashboard',
        url: "/dashboard",
    },
    {
        name: 'All Course',
        url: "/course",
    },
    {
        name: 'Instractors',
        url: "/instracots",
    },
    {
        name: 'Students',
        url: "/dashboard/users",
    },
]
const AdminMenu = () => {
    
    return (
        <DashboardMenu>{adminMenuItems}</DashboardMenu>
    );
};

export default AdminMenu;