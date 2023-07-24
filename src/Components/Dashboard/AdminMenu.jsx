import DashboardMenu from "../../shared/sharedComponents/DashboardMenu";

const AdminMenu = () => {
    const menuItems = [
        {
            name: 'Dashboard',
            to: "/dashboard",
        },
        {
            name: 'All Course',
            url: "/course",
        },
        {
            name: 'Instractors',
            url: "/",
        },
        {
            name: 'Students',
            url: "/dashboard/users",
        },
    ]
    return (
        <DashboardMenu>{menuItems}</DashboardMenu>
    );
};

export default AdminMenu;